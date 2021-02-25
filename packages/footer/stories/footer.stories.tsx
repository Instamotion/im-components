import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Footer, { FooterVariant } from '../src';

import messages from '../utils/locales';

storiesOf('Complex | Footer', module)
  .add('old', () =>
    renderWithThemeAndI18n(
      <Footer showEnvkv variant={FooterVariant.old} googleToken="123" facebookToken="qwe" />,
      'de',
      messages
    )
  )
  .add('new', () =>
    renderWithThemeAndI18n(
      <Footer showEnvkv variant={FooterVariant.new} googleToken="123" facebookToken="qwe" />,
      'de',
      messages
    )
  )
  .add('Süddeutsche Zeitung', () =>
    renderWithThemeAndI18n(<Footer variant={FooterVariant.sz} />, 'de', messages)
  );
