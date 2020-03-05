import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Icon, { AvailableIcons, Icons } from '../src';

const BigIcon = styled(Icons.file)`
  font-size: 3rem;
`;

storiesOf('Icon', module).add('available icons', () => (
  <div>
    <Icon icon="arrowCircleLeft" size="lg" />
    TEXT
    <br />
    <Icon icon="file" />
    Text
    <br />
    Lorem ipsum
    <BigIcon color="downy" />
    <br />
    {Object.keys(Icons).map((item, index) => {
      // const IconDynamic = Icons[item as AvailableIcons];
      return <Icon icon={item as AvailableIcons} />;
    })}
    <br />
    <Icon icon="arrowCircleLeft" size="lg" />
  </div>
));
