import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Icon, { AvailableIcons, Icons } from '../src';
import { px2rem } from '../../utils/src/css';

const IconsContainer = styled.div`
  & > span {
    margin-right: ${px2rem(10)};
  }
`;

storiesOf('Icon', module).add('available icons', () => (
  <IconsContainer>
    {Object.keys(Icons).map((item, index) => {
      return <Icon key={index} iconName={item as AvailableIcons} size={number('size', 20)} />;
    })}
  </IconsContainer>
));
