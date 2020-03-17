import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Icon from '@im-ui/icon';
import Button, { ButtonProps, ButtonTypes } from '../src/';

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
  .add('with text and icon v2', () => {
    const props: ButtonProps = {
      sizing: 'full-width',
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0])
    };
    return (
      <Button {...props}>
        {text('Label', 'Hello World')}
        <Icon icon="bars" />
      </Button>
    );
  });
