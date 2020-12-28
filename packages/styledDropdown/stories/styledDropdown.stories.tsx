import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import { AvailableIcons } from '@im-ui/icon';
import StyledDropdown, { OptionType } from '../src';

storiesOf('Styled dropdown', module)
  .add('Dropdown with default', () => {
    const iconOptions: Array<AvailableIcons> = ['file', 'envelope', 'condition'];
    const options: OptionType[] = [
      {
        value: text('value', '_default item', 'default item'),
        label: text('label', 'default item', 'default item'),
        iconName: select<AvailableIcons>('iconName', iconOptions, 'condition', 'default item')
      },
      {
        value: text('value2', 'non default item', 'non default item'),
        label: text('label2', 'non default item', 'non default item'),
        iconName: select<AvailableIcons>('iconName2', iconOptions, 'condition', 'non default item')
      }
    ];
    return renderWithThemeAndI18n(
      <div style={{ width: '280px' }}>
        <StyledDropdown
          options={options}
          label={text('label', 'Click on me!', 'other')}
          disabled={boolean('disabled', false, 'other')}
          defaultItem={options[0]}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
        />
      </div>
    );
  })
  .add('Dropdown with placeholder', () => {
    const optionsWithoutIcons: OptionType[] = [
      {
        value: text('value', 'default item'),
        label: text('label', 'default item')
      },
      {
        value: text('value2', 'non default item'),
        label: text('label2', 'non default item')
      }
    ];

    return renderWithThemeAndI18n(
      <StyledDropdown
        options={optionsWithoutIcons}
        defaultItem={optionsWithoutIcons[0]}
        placeholder={text('placeholder', 'Choose value')}
        onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
        label={text('label', 'Click on me!', 'other')}
        disabled={boolean('disabled', false, 'other')}
      />
    );
  });
