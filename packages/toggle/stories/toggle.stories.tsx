import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import messages from '../utils/locales';

import Toggle, { ToggleProps } from '../src';

storiesOf('Toggle', module).add('Default', () => {
  const props: ToggleProps = {
    id: 'switcher id',
    disabled: false,
    label: 'serp.filters.topAngebote',
    onChange: checked => {
      action('clicked')(checked);
    }
  };

  return renderWithThemeAdnI18n(<Toggle {...props} />, 'de', messages);
});
