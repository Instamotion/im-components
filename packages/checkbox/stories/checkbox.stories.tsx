import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox, { CheckboxProps } from '../src';

const stories = storiesOf('Controls | Checkbox', module);

stories.addDecorator(withKnobs);

stories
  .add('multi line', () => {
    const props: CheckboxProps = {
      id: 'ch1',
      onChange: checked => {
        action('clicked')(checked);
      }
    };

    return (
      <Checkbox {...props}>
        {text('Label1', 'Check if...')}
        <br />
        {text('Label2', '... you need one')}
      </Checkbox>
    );
  })

  .add('checked by default', () => {
    const props: CheckboxProps = {
      id: 'ch1',
      checked: true,
      onChange: checked => {
        action('clicked')(checked);
      }
    };

    return (
      <Checkbox {...props}>
        {text('Label1', 'Check if...')}
        <br />
        {text('Label2', '... you need one')}
      </Checkbox>
    );
  });
