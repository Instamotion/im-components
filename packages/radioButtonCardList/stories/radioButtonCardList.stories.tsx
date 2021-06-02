import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import { action } from '@storybook/addon-actions';

import RadioButtonCardList, { RadioButtonCardListProps } from '../src';

storiesOf('Radio Button Card List', module).add('Default', () => {
  const props: RadioButtonCardListProps<string> = {
    radioButtons: [
      {
        label: 'Finanzierung',
        value: 'finanzierung'
      },
      {
        label: 'Barkauf',
        value: 'barkauf'
      },
      {
        label: 'Persönliche Beratung',
        value: 'beratung'
      }
    ],
    selected: 'finanzierung',
    onChange: (selected: string) => {
      action('Radio changed')(selected);
    }
  };

  return renderWithThemeAndI18n(<RadioButtonCardList {...props} />);
});
