import React from 'react';
import { storiesOf } from '@storybook/react';
import Label, { LabelProps } from '../src';

storiesOf('Label', module).add('Label with text', () => {
  const props: LabelProps = { id: 'label-1' };

  return <Label {...props}>Label</Label>;
});
