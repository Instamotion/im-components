import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Checkbox, { CheckboxProps } from '../src';
import { renderWithThemeAdnI18n } from '@im-ui/utils';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories
  .add('multi line', () => {
    const props: CheckboxProps = {
      id: 'ch1',
      messageId: text('Label1', 'label text'),
      onChange: checked => {
        action('clicked')(checked);
      }
    };
    return renderWithThemeAdnI18n(<Checkbox {...props} />);
  })

  .add('checked by default', () => {
    const props: CheckboxProps = {
      id: 'ch1',
      checked: true,
      messageId: text('Label1', 'label text'),
      onChange: checked => {
        action('clicked')(checked);
      }
    };
    return renderWithThemeAdnI18n(<Checkbox {...props} />);
  });
