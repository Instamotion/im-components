import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

// import Validation, { ValidationProps } from '../src';
import FormOne from '../utils/formOne';

storiesOf('Validation', module).add('Default', () => {
  return renderWithThemeAndI18n(<FormOne />);
});
