import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import styled from 'styled-components';
import messages from '../utils/locales';
import { number } from '@storybook/addon-knobs';

import ImHeader, { HeaderTypes } from '../src';

const Content = styled.div`
  height: 3000px;
`;
const WrappContent = styled.div`
  background-color: gray;
`;

let stories = storiesOf('Im Header', module);

stories.add('new header light', () => {
  return renderWithThemeAndI18n(
    <WrappContent>
      <ImHeader type={HeaderTypes.new} favoritesCount={number('favorites', 23)} light />
      <Content />
    </WrappContent>,
    'de',
    messages
  );
});
stories.add('new header light - 0 fav', () => {
  return renderWithThemeAndI18n(
    <WrappContent>
      <ImHeader type={HeaderTypes.new} favoritesCount={number('favorites', 0)} light />
      <Content />
    </WrappContent>,
    'de',
    messages
  );
});
stories.add('new header usual', () => {
  return renderWithThemeAndI18n(
    <WrappContent>
      <ImHeader type={HeaderTypes.new} />
      <Content />
    </WrappContent>,
    'de',
    messages
  );
});
stories.add('SZ header', () => {
  return renderWithThemeAndI18n(
    <WrappContent>
      <ImHeader type={HeaderTypes.sz} />
      <Content />
    </WrappContent>,
    'de',
    messages
  );
});
