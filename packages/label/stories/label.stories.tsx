import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Label, { LabelProps } from '../src';

storiesOf('Label', module).add('Label with text', () => {
  const props: LabelProps = {
    messageId: text('messageId', 'Label'),
    required: boolean('required', false),
    disabled: boolean('disabled', false)
  };

  return renderWithThemeAndI18n(<Label {...props} />);
});
