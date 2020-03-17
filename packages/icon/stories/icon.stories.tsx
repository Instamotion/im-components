import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Icon, { AvailableIcons, Icons } from '../src';

const BigIcon = styled(Icons.file)`
  font-size: 3rem;
`;

storiesOf('Icon', module).add('available icons', () => (
  <div>
    <span>
      Regular: <Icon icon="gearbox" /> large: <Icon icon="gearbox" size="lg" /> small:{' '}
      <Icon icon="gearbox" size="sm" />
    </span>
    <br />
    <br />
    {Object.keys(Icons).map(item => {
      return <Icon icon={item as AvailableIcons} style={{ margin: '0 0.5rem 0 0' }} />;
    })}
  </div>
));
