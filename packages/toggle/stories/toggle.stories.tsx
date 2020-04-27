import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import messages from '../utils/locales';
import { action } from '@storybook/addon-actions';

import Toggle, { ToggleProps } from '../src';

storiesOf('Toggle', module).add('Default', () => {
  const props: ToggleProps = {
    id: 'switcher id',
    disabled: false,
    messageId: 'serp.filters.topAngebote',
    onChange: checked => {
      action('clicked')(checked);
    }
  };

  return renderWithThemeAndI18n(<Toggle {...props} />, 'de', messages);
});
