import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import RadioButton, { RadioButtonProps } from '../src';

storiesOf('Radio Button', module).add('single one', () => {
  const props: RadioButtonProps = {
    id: 'radio-1',
    name: 'radio',
    label: 'Radio',
    value: 'value',
    checked: true
  };
  return (
    <Fragment>
      <RadioButton {...props} key={props.id} />
    </Fragment>
  );
});
