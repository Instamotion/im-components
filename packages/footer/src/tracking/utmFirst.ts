const cookieNamePrefix = '_uc_first_';
const cookieFirstHitName = 'hit_datetime';
const cookieExpiryDays = 365; //year
const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const readCookie = (name: string) => {
  const reg = RegExp(`(?:(?:^|.*;\\s*)${cookieNamePrefix}${name}\\s*\\=\\s*([^;]*).*$)|^.*$`);
  return document.cookie.replace(reg, '$1');
};

const createCookie = (name: string, value: string) => {
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + cookieExpiryDays * 24 * 60 * 60 * 1000); // 1 year by default
  const cookieExpire = '; expires=' + expireDate.toUTCString();
  const path = '; path=/';
  document.cookie = cookieNamePrefix + name + '=' + value + cookieExpire + path;
};

const getURLParamByName = (name: string): string => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = '[\\?&]' + name + '=([^&#]*)';
  const regex = new RegExp(regexS);
  const results = regex.exec(window.location.search);
  return results && results[1] ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : '';
};

const isUTMFirstCookiesExists = () =>
  utmParams.reduce((acc, param) => acc + (readCookie(param) === '' ? 0 : 1), 0) > 0;

const createUTMCookie = (name: string) => {
  const specialParams = ['utm_source', 'utm_medium'];
  const value = getURLParamByName(name);
  const setValue = specialParams.indexOf(name) !== -1 && !value ? 'direct' : value;
  createCookie(name, setValue);
};

const createFirstUTMCookies = () => utmParams.forEach(param => createUTMCookie(param));

const createFirtHitCookie = () => {
  const date = new Date();
  const isoString = date.toISOString();
  const offsetArr = date.toString().match(/[-\+][0-9]{4}/);
  const offset =
    offsetArr && offsetArr[0]
      ? offsetArr[0].slice(0, 3) + ':' + offsetArr[0].slice(3, 5)
      : '+00:00';
  const dataformat = isoString.slice(0, isoString.length - 1) + offset;
  // format looks like "2020-03-26T13:07:32.431+01:00" - UTC with local offset

  createCookie(cookieFirstHitName, dataformat);
};

export const utmFirst = () => {
  if (isUTMFirstCookiesExists()) {
    return false;
  }

  createFirstUTMCookies();
  createFirtHitCookie();
};

export default utmFirst;
