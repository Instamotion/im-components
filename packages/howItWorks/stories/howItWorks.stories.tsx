import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import messages from '../utils/locales';

import HowItWorks, { HowItWorksProps } from '../src';

storiesOf('How It Works', module).add('Default', () => {
  const props: HowItWorksProps = {
    currentStep: 1,
    items: [
      'Selecting the car and configure financing',
      'Request the car and financing',
      'Financing confirmation',
      'Rechnungserhalt'
    ]
  };

  return renderWithThemeAndI18n(<HowItWorks {...props} />, 'de', messages);
});
