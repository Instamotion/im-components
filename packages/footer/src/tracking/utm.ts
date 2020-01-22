/**
 * Inspired by: https://github.com/medius/utm_form/blob/master/dest/utm_form-1.0.4.js
 *
 */
import TagManager, { DataLayerArgs } from 'react-gtm-module';

const sessionCookieName = 'session';
const cookieNamePrefix = '_uc_';
const sessionLocalstorageExpKey = cookieNamePrefix + sessionCookieName;
const cookieExpiryMinutes = 30; //minutes
const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const additionalParams = ['gclid', 'fbclid'];

const readCookie = (name: string) => {
  const reg = RegExp(`(?:(?:^|.*;\\s*)${cookieNamePrefix}${name}\\s*\\=\\s*([^;]*).*$)|^.*$`);
  return document.cookie.replace(reg, '$1');
};

const saveExpireForSessionCookie = (expire: Date) => {
  if (window.localStorage) {
    localStorage.setItem(sessionLocalstorageExpKey, expire.getTime().toString());
  }
};

const createCookie = (name: string, value: string) => {
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + cookieExpiryMinutes * 60 * 1000); // 30 min
  const cookieExpire = '; expires=' + expireDate.toUTCString();
  document.cookie = cookieNamePrefix + name + '=' + escape(value) + cookieExpire;

  if (name === sessionCookieName) {
    saveExpireForSessionCookie(expireDate);
  }
};

const generateNewGUID = () => {
  // Public Domain/MIT
  let date = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    date += performance.now(); //use high-precision timer if available
  }

  const randomGenerator = (symbol: string) => {
    let random = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (symbol === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  };

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, randomGenerator);
};

const resetSession = () => createCookie(sessionCookieName, generateNewGUID());

const prolongOrCreateSession = () => {
  const value = readCookie(sessionCookieName);

  if (value) {
    createCookie(sessionCookieName, value);
  } else {
    resetSession();
  }
};

const getURLParamByName = (name: string): string => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = '[\\?&]' + name + '=([^&#]*)';
  const regex = new RegExp(regexS);
  const results = regex.exec(window.location.search);
  return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : '';
};

const isUTMParamsPresentInUrl = () =>
  utmParams.reduce((acc, param) => acc + (getURLParamByName(param) === '' ? 0 : 1), 0) > 0;

const isAdditionalParamsPresentInUrl = () =>
  additionalParams.reduce((acc, param) => acc + (getURLParamByName(param) === '' ? 0 : 1), 0) > 0;

const isItAfterMidnight = () => {
  if (!window.localStorage) {
    return false;
  }

  const sessionExpTimestamp = localStorage.getItem(sessionLocalstorageExpKey);

  if (!sessionExpTimestamp) {
    return false;
  }

  const past = new Date(parseInt(sessionExpTimestamp, 10));
  past.setTime(past.getTime() - cookieExpiryMinutes * 60 * 1000);
  const now = new Date();

  return past.getDay() !== now.getDay();
};

const isSessionCookieExists = () => !!readCookie(sessionCookieName);

const isItAfterMidnightAndSessionCookiePresent = () =>
  isSessionCookieExists() && isItAfterMidnight();

const writeUtmCookieFromParams = () =>
  utmParams.forEach(param => createCookie(param, getURLParamByName(param)));

const getCurrentHashOfUTMParams = () =>
  utmParams.reduce((acc, param) => acc + readCookie(param), '');

const isUTMParamsChanged = () => {
  if (isUTMParamsPresentInUrl()) {
    const currentUTMHash = getCurrentHashOfUTMParams();
    writeUtmCookieFromParams();
    const newUTMHash = getCurrentHashOfUTMParams();
    return currentUTMHash !== newUTMHash;
  }

  return false;
};

const createUTMCookie = (param: string) => {
  const specialParams = ['utm_source', 'utm_medium'];
  const defaultVal = specialParams.includes(param) ? 'direct' : '';
  createCookie(param, defaultVal);
};

const prolongOrCreateUTMCookies = () => {
  const isUTMParamsPresentInURL = isUTMParamsPresentInUrl();

  utmParams.forEach(param => {
    const value = readCookie(param);

    if (value) {
      createCookie(param, value);
    } else if (!isUTMParamsPresentInURL) {
      createUTMCookie(param);
    }
  });
};

const resetUTMCookies = () => {
  if (!isUTMParamsPresentInUrl()) {
    utmParams.forEach(param => createUTMCookie(param));
  }
};

const pushToDataLayer = (value: string) => {
  const dataLayer: DataLayerArgs = {
    dataLayer: {
      im_session_id: value
    }
  };
  TagManager.dataLayer(dataLayer);
};

/**
 *
 * Does a user have a tracking cookie?
 *
 * If no -> set a new tracking cookie and set UTM cookie if present in URL
 * If yes -> is it after (within a 30 min) midnight and previous tracking cookie was set before midnight?
 *      If yes -> set a new tracking cookie and prolong UTM cookies
 *      If no -> does UTM params changed (was set or changed)? — we could store a hash of the UTM cookies in a separate cookie with the correlated expiration logic
 *          If yes -> set a new tracking cookie
 *          If no -> do we have gclid or fbclid in the URL?
 *              If yes -> set a new tracking cookie
 *              If no -> prolong existing tracking cookie for 30 min
 *
 */
export const utm = () => {
  if (!isSessionCookieExists()) {
    resetSession();
    if (isUTMParamsPresentInUrl()) {
      writeUtmCookieFromParams();
    } else {
      resetUTMCookies();
    }
  } else if (isItAfterMidnightAndSessionCookiePresent()) {
    resetSession();
    prolongOrCreateUTMCookies();
  } else if (isUTMParamsChanged()) {
    resetSession();
  } else if (isAdditionalParamsPresentInUrl()) {
    resetSession();
    prolongOrCreateUTMCookies();
  } else {
    prolongOrCreateSession();
    prolongOrCreateUTMCookies();
  }

  pushToDataLayer(readCookie(sessionCookieName));
};

export default utm;
