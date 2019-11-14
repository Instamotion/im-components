/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import RadioButton from '../src';

describe('RadioButton', () => {
  it('will be checked if checked parameter true', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <RadioButton label="radio-1" value="radio-1" checked onChange={() => {}} />
      )
    );

    expect(wrapper.find('input').prop('checked')).toEqual(true);
  });

  it('should call onChange callback if passed', () => {
    const cb = jest.fn();
    const evt = { target: { value: 'financing' } };
    const wrapper = mount(
      renderWithThemeAndI18n(<RadioButton label="radio-1" value="radio-1" onChange={cb} />)
    );
    wrapper.find('input').simulate('change', evt);
    expect((cb.mock.calls[0][0] as React.ChangeEvent<HTMLInputElement>).target.value).toEqual(
      'financing'
    );
  });

  it('should call nothing when onChange callback is skipped', () => {
    const cb = jest.fn();
    const evt = { target: { value: 'financing' } };
    const wrapper = mount(renderWithThemeAndI18n(<RadioButton label="radio-1" value="radio-1" />));
    wrapper.find('input').simulate('change', evt);
    expect(cb.mock.calls).toEqual([]);
  });
});
