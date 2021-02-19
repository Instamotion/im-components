import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../src';

storiesOf('Label', module)
  .add('Text as attribute', () => {
    return <Label text={'Hello there!'} />;
  })

  .add('Required', () => {
    return <Label required={true} text={'Hello there!'} />;
  })

  .add('Required error', () => {
    return <Label required={true} text={'Hello there!'} error={true} />;
  })

  .add('With JSX in text', () => {
    return (
      <Label
        required={true}
        text={
          <span>
            I have read <a href="#">term and conditions</a> as well as <a href="#">privacy</a>{' '}
            statement
          </span>
        }
      />
    );
  })

  .add('Disabled', () => {
    return (
      <table>
        <tr>
          <td>Normal:</td>
          <td>
            <Label required={true} text={'Hello there!'} />
          </td>
        </tr>
        <tr>
          <td>Disabled:</td>
          <td>
            <Label disabled={true} required={true} text={'Hello there!'} />
          </td>
        </tr>
      </table>
    );
  });
