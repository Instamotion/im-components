import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button, {
  IconButton,
  IconButtonProps,
  ButtonProps,
  AvailableButtonTypes,
  ButtonTypes
} from '../src/';

const buttonVariants: Array<ButtonTypes> = ['primary', 'secondary'];

storiesOf('Button', module)
  .add('with text', () => {
    const props: ButtonProps = {
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0])
    };
    return <Button {...props}>{text('Label', 'Hello World')}</Button>;
  })
  .add('with text and icon', () => {
    const props: IconButtonProps = {
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0]),
      icon: 'envelope'
    };
    return <IconButton {...props}>{text('Label', 'Icon Test')}</IconButton>;
  });
