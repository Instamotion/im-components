import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Icon from '../src';

storiesOf('Icon', module).add('single icon', () => (
  <Icon iconName="envelope" size={number('size', 20)} />
));
