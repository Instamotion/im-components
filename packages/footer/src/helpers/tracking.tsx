import TagManager, { DataLayerArgs } from 'react-gtm-module';
import { useSSR } from './helpers';

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

export const trackingPhoneNumberClicked = () =>
  trackingLogCustomEvent({
    event: 'click',
    schema: 'interaction',
    interaction: {
      category: 'call',
      action: 'call',
      label: 'from_footer',
      variant: undefined
    }
  });

export const trackingMailLinkClicked = () =>
  trackingLogCustomEvent({
    event: 'click',
    schema: 'interaction',
    interaction: {
      category: 'contact',
      action: 'mail',
      label: 'from_footer',
      variant: undefined
    }
  });

export const trackingNewsletterSuccess = () =>
  trackingLogCustomEvent({
    event: 'click',
    schema: 'interaction',
    interaction: {
      category: 'contact',
      action: 'newsletter_subscription',
      label: 'from_footer',
      variant: undefined
    }
  });

export const trackingNewsletterError = (url: string) =>
  trackingLogCustomEvent({
    event: 'shown',
    schema: 'error',
    error: {
      category: 'contact',
      source: url,
      name: 'request_error',
      description: 'Newsletter subscription error: footer'
    }
  });
