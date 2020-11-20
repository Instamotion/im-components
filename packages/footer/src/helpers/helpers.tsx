export const useSSR = (): { isBrowser: boolean; isServer: boolean } => {
  const isBrowser: boolean = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

  return {
    isBrowser,
    isServer: !isBrowser
  };
};
