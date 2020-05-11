import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonToggle, { ButtonToggleItemProps, ButtonToggleProps } from '../src/buttonToggle';

storiesOf('Button toggle', module)
  .add('default', () => {
    const [selectedItem, setSelectedItem] = useState<number>(1);

    const firstButton: ButtonToggleItemProps<number> = { label: '1', value: 1 };
    const secondButton: ButtonToggleItemProps<number> = { label: '2', value: 2 };
    const thirdButton: ButtonToggleItemProps<number> = { label: '3', value: 3 };
    const fourthButton: ButtonToggleItemProps<number> = { label: '4', value: 4, disabled: true };
    const fifthButton: ButtonToggleItemProps<number> = { label: '5', value: 5, disabled: true };

    return (
      <ButtonToggle<number>
        items={[firstButton, secondButton, thirdButton, fourthButton, fifthButton]}
        selected={selectedItem}
        onChange={selected => {
          setSelectedItem(selected);
          action('Button changed')(selected);
        }}
      />
    );
  })

  .add('Lots of options', () => {
    const [selectedItem, setSelectedItem] = useState<number>(1);

    const items = Array.from(Array(20), (_, i) => ({ label: String(i), value: i }));

    return (
      <ButtonToggle<number>
        items={items}
        selected={selectedItem}
        onChange={selected => {
          setSelectedItem(selected);
          action('Button changed')(selected);
        }}
      />
    );
  });
