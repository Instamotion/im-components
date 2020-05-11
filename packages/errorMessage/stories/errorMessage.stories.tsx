import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorMessage from '../src';

storiesOf('ErrorMessage', module)
  .add('Simple message', () => {
    return <ErrorMessage>Something went wrong, but we're on it!</ErrorMessage>;
  })

  .add('With JSX', () => {
    return (
      <ErrorMessage>
        Really <strong>bad</strong> error happenned. Read <a href="#">this</a> for more info.
      </ErrorMessage>
    );
  });
