import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonToggle, { ButtonToggleItemProps, ButtonToggleProps } from '../src/buttonToggle';

storiesOf('Button toggle', module).add('default', () => {
  const firstButton: ButtonToggleItemProps = { label: '1', value: 1 };
  const secondButton: ButtonToggleItemProps = { label: '2', value: 2 };
  const thirdButton: ButtonToggleItemProps = { label: '3', value: 3 };
  const fourthButton: ButtonToggleItemProps = { label: '4', value: 4, disabled: true };
  const fifthButton: ButtonToggleItemProps = { label: '5', value: 5, disabled: true };

  const props: ButtonToggleProps = {
    items: [firstButton, secondButton, thirdButton, fourthButton, fifthButton],
    selected: 2,
    onChange: (selected: string | number) => {
      action('Button changed')(selected);
    }
  };

  return <ButtonToggle {...props} />;
});
