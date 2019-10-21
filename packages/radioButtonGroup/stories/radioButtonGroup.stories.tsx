import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import RadioButtonGroup from '../src';
import {
  RadioButtonGroupOrientation,
  RadioButtonGroupProps,
  RadioButtonsProps
} from '../src/radioButtonGroup';

enum FinancingType {
  Financing = 'financing',
  Cash = 'cash'
}

const radioButtons: RadioButtonsProps<FinancingType>[] = [
  { label: 'Financing', value: FinancingType.Financing },
  { label: 'Cash', value: FinancingType.Cash }
];

storiesOf('Radio Button Group', module)
  .add('vertical group of two', () => {
    const props: RadioButtonGroupProps<FinancingType> = {
      radioButtons,
      selected: FinancingType.Financing,
      orientation: RadioButtonGroupOrientation.VERTICAL,
      onChange: (selected: string) => {
        action('Radio changed')(selected);
      }
    };

    return (
      <RadioButtonGroup {...props}>{text('Label', 'RadioButtonGroupComponent')}</RadioButtonGroup>
    );
  })

  .add('horizontal group of two', () => {
    const props: RadioButtonGroupProps<FinancingType> = {
      radioButtons,
      selected: FinancingType.Financing,
      orientation: RadioButtonGroupOrientation.HORIZONTAL,
      onChange: (selected: string) => {
        action('Radio changed')(selected);
      }
    };

    return (
      <RadioButtonGroup {...props}>{text('Label', 'RadioButtonGroupComponent')}</RadioButtonGroup>
    );
  });
