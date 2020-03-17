import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingSpinnerInstamotion from '../src';

storiesOf('Loading Spinner Instamotion', module)
  .add('in the wild', () => {
    return <LoadingSpinnerInstamotion />;
  })
  .add('centered', () => {
    return <LoadingSpinnerInstamotion centered />;
  });
