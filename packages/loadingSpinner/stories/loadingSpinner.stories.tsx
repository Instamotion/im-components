import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingSpinner from '../src';

storiesOf('Loading Spinner', module)
  .add('in the wild', () => {
    return <LoadingSpinner />;
  })
  .add('centered', () => {
    return <LoadingSpinner centered />;
  });
