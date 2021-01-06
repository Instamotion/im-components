import { trackingLogCustomEvent } from '@im-ui/utils';

export const trackingError = (code: number) =>
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
