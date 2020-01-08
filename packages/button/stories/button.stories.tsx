import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button, { IconButton, IconButtonProps, ButtonProps, ButtonTypes } from '../src/';

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
  .add('full width ', () => {
    const props: ButtonProps = {
      sizing: 'full-width',
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0])
    };
    return <Button {...props}>{text('Label', 'Hello World')}</Button>;
  })
  .add('with text and icon', () => {
    const propsL: IconButtonProps = {
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0]),
      icon: 'envelope'
    };
    const propsR: IconButtonProps = {
      ...propsL,
      iconPosition: 'right'
    };
    return (
      <div>
        <IconButton {...propsL}>{text('Label', 'Icon Test')}</IconButton>
        <hr />
        <IconButton {...propsR}>{text('Label', 'Icon Test')}</IconButton>
      </div>
    );
  });
