import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import { action } from '@storybook/addon-actions';

import RadioButtonCardList, { RadioButtonCardListProps } from '../src';

storiesOf('Radio Button Card List', module).add('Default', () => {
  const radioButtons = [
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
  ];
  const [value, setValue] = useState(radioButtons[0].value);
  const props: RadioButtonCardListProps<string> = {
    radioButtons: radioButtons,
    value: value,
    onChange: (selected: any) => {
      setValue(selected);
      action('Radio changed')(selected);
    }
  };

  return renderWithThemeAndI18n(<RadioButtonCardList {...props} />);
});
