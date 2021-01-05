import { trackingLogCustomEvent } from '@im-ui/utils';

export const trackingCodeError = (code: number) =>
  trackingLogCustomEvent({
    event: 'pageview',
    schema: 'content',
    content: {
      level1: 'error',
      level2: code,
      level3: undefined,
      level4: undefined,
      type: 'error'
    }
  });

export const trackingMaintenanceError = () =>
  trackingLogCustomEvent({
    event: 'pageview',
    schema: 'content',
    content: {
      level1: 'error',
      level2: 'maintenance',
      level3: undefined,
      level4: undefined,
      type: 'error'
    }
  });

export const trackingCheckoutError = () =>
  trackingLogCustomEvent({
    event: 'pageview',
    schema: 'content',
    content: {
      level1: 'error',
      level2: 'sofastrecke',
      level3: undefined,
      level4: undefined,
      type: 'error'
    }
  });
