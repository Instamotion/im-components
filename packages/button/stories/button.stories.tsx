import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button, { IconButton } from '../src/';

storiesOf('Button', module)
  .add('with text', () => {
    const props: React.ButtonHTMLAttributes<any> = {
      onClick: action('Button click')
    };

    return <Button {...props}>{text('Label', 'Hello World')}</Button>;
  })
  .add('with text and icon', () => (
    <>
      <div style={{ width: 300 }}>
        <IconButton icon="envelope">Icon Test</IconButton>
      </div>
    </>
  ));
