import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import { action } from '@storybook/addon-actions';
import { RadioButtonCard, RadioButtonCardProps } from '../src';

storiesOf('Radio Button Card', module).add('Default', () => {
  const props: RadioButtonCardProps = {
    label: 'Finanzierung',
    value: 'finanzierung',
    onChange: (selected: string) => {
      action('Radio changed')(selected);
    }
  };

  return renderWithThemeAndI18n(<RadioButtonCard {...props} />);
});
