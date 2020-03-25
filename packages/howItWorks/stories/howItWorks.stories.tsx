import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import messages from '../utils/locales';

import HowItWorks, { HowItWorksProps } from '../src';

storiesOf('How It Works', module).add('Default', () => {
  const props: HowItWorksProps = {};

  return renderWithThemeAndI18n(<HowItWorks {...props} />, 'de', messages);
});