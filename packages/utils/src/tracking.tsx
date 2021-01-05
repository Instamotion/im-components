import TagManager, { DataLayerArgs } from 'react-gtm-module';

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

const { isBrowser } = useSSR();

export const trackingLogEvent = (event: string) => {
  if (isBrowser) {
    const dataLayer: DataLayerArgs = {
      dataLayer: {
        event
      }
    };
    TagManager.dataLayer(dataLayer);
  }
};

export const trackingLogCustomEvent = (props: Object) => {
  if (isBrowser) {
    TagManager.dataLayer({
      dataLayer: props
    });
  }
};
