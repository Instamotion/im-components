/**
 * According to the google documentation https://support.google.com/google-ads/answer/6299296#edit_website
 * Gclid cookie is required to pass it to SF in order to manage Ad campaigns
 *
 */

const createCookie = (value: string): void => {
  const cookieName = '_im_gclid';
  const expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds

  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + expiryPeriod);

  const cookieExpire = expiryDate != null ? '; expires=' + expiryDate.toUTCString() : '';
  const cookiePath = '; path=/';
  document.cookie = cookieName + '=' + escape(value) + cookieExpire + cookiePath;
};

const getParam = (param: string): string | null => {
  const match = RegExp('[?&]' + param + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

const addGclid = () => {
  const gclidParam = getParam('gclid');

  if (gclidParam === null) {
    return;
  }

  createCookie(gclidParam);
};

export const gclid = addGclid;

export default gclid;
