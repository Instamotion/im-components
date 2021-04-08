import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Icon, { AvailableIcons } from '@im-ui/icon';
import StyledDropdown, { DropdownCombiner, OptionType, FilterableDropdown } from '../src';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const TitleEl = styled.div`
  margin: 16px 0;
  font-weight: bold;
`;

storiesOf('Styled dropdown', module)
  .add('Filterable Dropdown', () => {
    const iconOptions: Array<AvailableIcons> = ['file', 'envelope', 'condition'];
    const options: OptionType[] = [
      {
        value: text('value', 'item1', 'item1'),
        label: text('label', 'item1', 'item1'),
        iconName: select<AvailableIcons>('iconName', iconOptions, 'condition', 'item1')
      },
      {
        value: text('value2', 'item2', 'item2'),
        label: text('label2', 'item2', 'item2'),
        iconName: select<AvailableIcons>('iconName2', iconOptions, 'condition', 'item2')
      }
    ];
    return renderWithThemeAndI18n(
      <div style={{ width: '280px' }}>
        <TitleEl>Not floated</TitleEl>
        <FilterableDropdown
          options={options}
          label={text('label', 'Click on me!', 'other')}
          defaultItem={options[0]}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
        />

        <TitleEl>Floated</TitleEl>
        <FilterableDropdown
          options={options}
          defaultItem={options[0]}
          isFloatLabel={true}
          label={text('label', 'Click on me!', 'other')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
        />
      </div>
    );
  })
  .add('Dropdown with icon instead arrow', () => {
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
          openStateIcon={<Icon icon="phone" color="oil" />}
          closeStateIcon={<Icon icon="phone" color="oil" />}
        />
      </div>
    );
  })
  .add('Dropdown with arrow', () => {
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
  .add('Dropdown default, all states', () => {
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
      <>
        <TitleEl>with defauld selected value</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          defaultItem={optionsWithoutIcons[0]}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
          disabled={boolean('disabled', false, 'other')}
        />

        <TitleEl>without defauld value</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
          disabled={boolean('disabled', false, 'other')}
        />

        <TitleEl>with defauld value and error</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          defaultItem={optionsWithoutIcons[0]}
          errorMessage={<div>error text</div>}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
        />

        <TitleEl>disabled DD without defauld value</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
          disabled={true}
        />

        <TitleEl>with defauld value and floated label</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          defaultItem={optionsWithoutIcons[0]}
          isFloatLabel={true}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
          disabled={boolean('disabled', false, 'other')}
        />

        <TitleEl>without defauld value and floated label</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          isFloatLabel={true}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
          disabled={boolean('disabled', false, 'other')}
        />

        <TitleEl>with defauld value and floated label and error</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          isFloatLabel={true}
          defaultItem={optionsWithoutIcons[0]}
          errorMessage={<div>error text</div>}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
        />

        <TitleEl>disabled with defauld value and floated label</TitleEl>
        <StyledDropdown
          options={optionsWithoutIcons}
          isFloatLabel={true}
          defaultItem={optionsWithoutIcons[0]}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
          disabled={true}
        />
      </>
    );
  })
  .add('Phone dropdown with error', () => {
    const phoneCodes: OptionType[] = [
      {
        label: 'Deutschland, +49',
        value: '+49'
      },
      {
        label: 'Österreich, +43',
        value: '+43'
      }
    ];

    const selectStyles: FlattenSimpleInterpolation = css`
      padding: 0;
      position: absolute;
      left: 0;
      right: 0;

      input {
        width: 3rem;

        & + div {
          margin: 0;
        }
      }
    `;

    return renderWithThemeAndI18n(
      <>
        <StyledDropdown
          options={phoneCodes}
          defaultItem={phoneCodes[0]}
          selectStyles={selectStyles}
          placeholder={text('placeholder', 'Choose value')}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
          label={text('label', 'Click on me!', 'other')}
          required
          disabled={boolean('disabled', false, 'other')}
          errorMessage={<>sasd</>}
        />
      </>
    );
  })
  .add('Dropdown wrappers', () => {
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
      <DropdownCombiner label={text('label', 'Click on me!', 'other')}>
        <StyledDropdown
          options={options}
          disabled={boolean('disabled', false, 'other')}
          defaultItem={options[0]}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
        />
        <StyledDropdown
          options={options}
          disabled={boolean('disabled', false, 'other')}
          defaultItem={options[1]}
          onChange={(selectedItem: OptionType) => action('Chosen')(selectedItem)}
        />
      </DropdownCombiner>
    );
  });
