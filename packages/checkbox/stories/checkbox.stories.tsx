import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Checkbox from '../src';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories
  .add('Default usecase', () => {
    return (
      <Checkbox
        id={'ch1'}
        label={text('Label text', 'I agree')}
        onChange={state => action('Checkbox')(state)}
      />
    );
  })

  .add('Checked by default', () => {
    return (
      <Checkbox
        id={'ch1'}
        checked={true}
        label={text('Label text', 'I agree')}
        onChange={state => action('Checkbox')(state)}
      />
    );
  })

  .add('With error message', () => {
    return (
      <div>
        <Checkbox
          id={'ch1'}
          label={
            <span>
              I agree to <a href="#">term and conditions</a> and privace policy
            </span>
          }
          errorMessage={text('Label error text', 'Some error happened')}
          onChange={state => action('Checkbox')(state)}
        />
      </div>
    );
  })

  .add('Long label', () => {
    return (
      <div>
        <input />
        <br />
        <Checkbox
          id={'ch1'}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros vestibulum diam molestie molestie malesuada a lectus. Proin lacinia porta iaculis. Aenean non posuere est. Aenean pulvinar sit amet diam quis pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
          onChange={state => action('Checkbox')(state)}
        />
        <br />
        <input />
      </div>
    );
  })

  .add('With other controlls', () => {
    return (
      <div>
        <input />
        <br />
        <Checkbox
          id={'ch1'}
          label={text('Label text', 'I agree')}
          onChange={state => action('Checkbox')(state)}
        />
        <br />
        <input />
      </div>
    );
  })

  .add('Without label', () => {
    return (
      <div>
        <Checkbox id={'ch1'} onChange={state => action('Checkbox')(state)} />
        <span>I agree with ...</span>
      </div>
    );
  });
