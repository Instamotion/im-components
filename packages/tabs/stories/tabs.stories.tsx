import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import theme from '@im-ui/theme';

import Tabs from '../src';

const DummyTab = styled.div`
  padding: 0.5rem;
  font-family: ${theme.font.sans.family};
  font-size: 1.5rem;
  color: ${theme.color.brightGrey};
`;

const DummyPanel = styled.div`
  padding: 1rem;
  background: ${theme.color.lightGrey};
  font-family: ${theme.font.sans.family};
  font-size: 1.5rem;
  color: ${theme.color.brightGrey};
`;

const AnotherDummyTab = styled.div`
  padding: 0.5rem;
  font-family: ${theme.font.sans.family};
  font-size: 1.5rem;
  color: ${theme.color.brightGrey};
`;

const AnotherDummyPanel = styled.div`
  padding: 1rem;
  background: ${theme.color.lightGrey};
  font-family: ${theme.font.sans.family};
  font-size: 1.5rem;
  color: ${theme.color.brightGrey};
`;

storiesOf('Tabs', module).add('Default', () => {
  return (
    <Tabs>
      <DummyTab>Finanzierung</DummyTab>
      <DummyPanel>Finanzierungsprozess description will be here</DummyPanel>

      <AnotherDummyTab>Barkauf</AnotherDummyTab>
      <AnotherDummyPanel>Kaufprozess description goes here</AnotherDummyPanel>
    </Tabs>
  );
});
