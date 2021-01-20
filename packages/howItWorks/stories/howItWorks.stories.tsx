import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import messages from '../utils/locales';

import HowItWorks, { HowItWorksProps } from '../src';

storiesOf('Complex | How It Works', module).add('Default', () => {
  const props: HowItWorksProps = {
    currentStep: 1,
    items: [
      'Wahl des Fahrzeugs mit Hilfe des Finanzierungsrechners',
      'Anfrage des Fahrzeugs und der gewählten Finanzierung',
      'Telefonberatung und Finanzierungsbestätigung',
      'Rechnungserhalt'
    ]
  };

  return renderWithThemeAndI18n(<HowItWorks {...props} />, 'de', messages);
});
