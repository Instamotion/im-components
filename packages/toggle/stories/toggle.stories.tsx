import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Toggle from '../src';

storiesOf('Toggle', module)
  .add('Default', () => {
    const [checked, setChecked] = useState(false);

    return (
      <Toggle
        id="id1"
        label="Top Offers"
        checked={checked}
        onChange={checked => {
          setChecked(checked);
          action('clicked')(checked);
        }}
      />
    );
  })

  .add('Checked by default', () => {
    const [checked, setChecked] = useState(true);

    return (
      <Toggle
        id="id1"
        label="Top Offers"
        checked={checked}
        onChange={checked => {
          setChecked(checked);
          action('clicked')(checked);
        }}
      />
    );
  })

  .add('Checked and disabled', () => {
    const [checked, setChecked] = useState(true);

    return (
      <Toggle
        id="id1"
        label="Top Offers"
        disabled={true}
        checked={checked}
        onChange={checked => {
          setChecked(checked);
          action('clicked')(checked);
        }}
      />
    );
  })

  .add('Disabled', () => {
    const [checked, setChecked] = useState(false);

    return (
      <Toggle
        id="id1"
        label="Top Offers"
        disabled={true}
        checked={checked}
        onChange={checked => {
          setChecked(checked);
          action('clicked')(checked);
        }}
      />
    );
  })

  .add('Full width', () => {
    const [checked, setChecked] = useState(false);

    return (
      <Toggle
        id="id1"
        fullWidth={true}
        label="Top Offers"
        onChange={checked => {
          setChecked(checked);
          action('clicked')(checked);
        }}
      />
    );
  });
