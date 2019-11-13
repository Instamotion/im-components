/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { text } from '@storybook/addon-knobs';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import RadioButtonGroup, { RadioButtonGroupProps } from '../src';
import { RadioButtonsProps, RadioButtonGroupOrientation } from '../src/radioButtonGroup';

enum FinancingType {
  Financing = 'financing',
  Cash = 'cash'
}

const radioButtons: RadioButtonsProps<FinancingType>[] = [
  { label: 'Financing', value: FinancingType.Financing },
  { label: 'Cash', value: FinancingType.Cash }
];

const cb = jest.fn();
const props: RadioButtonGroupProps<FinancingType> = {
  radioButtons,
  orientation: RadioButtonGroupOrientation.HORIZONTAL,
  selected: FinancingType.Financing,
  onChange: cb
};

describe('RadioButtonGroup', () => {
  it('renders with 2 radio buttons', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <RadioButtonGroup {...props}>{text('Label', 'RadioButtonGroupComponent')}</RadioButtonGroup>
      )
    );

    expect(wrapper.find('div').children().length).toEqual(2);
  });

  it('switch selected element', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <RadioButtonGroup {...props}>{text('Label', 'RadioButtonGroupComponent')}</RadioButtonGroup>
      )
    );

    const evt = { target: { value: 'cash' } };
    wrapper
      .find('input')
      .at(1)
      .simulate('change', evt);

    expect(cb.mock.calls[0][0]).toEqual('cash');
  });
});
