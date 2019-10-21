import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import { DropdownOptionProps } from '@im-ui/dropdown';
import { action } from '@storybook/addon-actions';
import RangeDropdown, { RangeDropdownProps } from '../src';

const optionsFrom: DropdownOptionProps[] = [
  { value: 'from', label: 'from' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
  { value: 300, label: '300' }
];

const optionsTo: DropdownOptionProps[] = [
  { value: 'to', label: 'to' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
  { value: 300, label: '300' }
];

storiesOf('Range Dropdown', module).add('default', () => {
  const props: RangeDropdownProps = {
    id: 'defaultRange',
    optionsFrom,
    optionsTo,
    placeholderTo: 'to',
    placeholderFrom: 'from',
    label: 'Select the range'
  };
  return renderWithThemeAdnI18n(
    <RangeDropdown {...props} onChange={r => action(`new range ${r[0]} - ${r[1]}`)(r)} />
  );
});
