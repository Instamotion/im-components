import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Icon from '../src';

storiesOf('Media | Icon', module)
.add('single icon', () => (
  <Icon iconName="envelope" size={number('size', 20)} />
));
