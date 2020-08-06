const detectSSR = (): { isBrowser: boolean; isServer: boolean } => {
  const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

  return {
    isBrowser: canUseDOM,
    isServer: !canUseDOM
  };
};

export default detectSSR;
