import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorMessage from '../src';

storiesOf('Controls | ErrorMessage', module)
.add('ErrorMessage with text', () => {
  return <ErrorMessage>Error occurs</ErrorMessage>;
});
