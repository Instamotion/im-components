import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src';
// import { AvailableColors } from '@im-ui/theme';

storiesOf('Header', module)
  .add('default', () => <Header variant="transparent" />)
  .add('black', () => <Header variant="black" />);
