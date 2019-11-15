/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import StyledDropdown, { OptionType, DropdownButton, Item } from '../src';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import theme from '@im-ui/theme';

const options: OptionType[] = [
  {
    value: 'default item',
    label: 'default item',
    iconName: 'condition'
  },
  {
    value: 'non default item',
    label: 'non default item'
  }
];

const optionWithEditions: OptionType[] = [
  {
    value: '__edition',
    label: 'edition'
  },
  {
    value: 'subitem',
    label: 'subitem'
  }
];

describe('Styled dropdown', () => {
  it('renders', () => {
    const wrapper = mount(renderWithThemeAndI18n(<StyledDropdown options={options} />));
    expect(wrapper.find(StyledDropdown)).toHaveLength(1);
  });
  it('default value test', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(<StyledDropdown options={options} defaultItem={options[0]} />)
    );
    expect(wrapper.find('input').prop('value')).toEqual(options[0].label);
  });
  it('items render', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(<StyledDropdown options={options} defaultItem={options[0]} />)
    );
    wrapper.find(DropdownButton).simulate('click');
    expect(wrapper.find(Item)).toHaveLength(2);
  });
  it('check label', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(<StyledDropdown options={options} label="im a label!" />)
    );
    expect(wrapper.find('label').text()).toEqual('im a label!');
  });
  it('items render', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(<StyledDropdown options={options} defaultItem={options[0]} />)
    );
    expect(
      wrapper
        .find('path')
        .at(0)
        .prop('fill')
    ).toEqual(theme.color.niagara);
  });

  it('disabled items render', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(<StyledDropdown options={options} disabled defaultItem={options[0]} />)
    );
    expect(
      wrapper
        .find('path')
        .at(0)
        .prop('fill')
    ).toEqual(theme.color.silver);
  });
  it('items width editions', () => {
    const wrapper = mount(renderWithThemeAndI18n(<StyledDropdown options={optionWithEditions} />));
    wrapper.find(DropdownButton).simulate('click');
    expect(wrapper.find(Item).at(0)).toHaveStyleRule('padding-left', '1.125rem');
    expect(wrapper.find(Item).at(1)).toHaveStyleRule('padding-left', '2.125rem');
  });
});
