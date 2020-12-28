export const openBanner = (e: React.MouseEvent<EventTarget>) => {
  e.preventDefault();

  const cookieOpenBttn = document.getElementsByClassName(
    'ot-floating-button__open'
  )?.[0] as HTMLButtonElement;

  cookieOpenBttn?.click();
};
