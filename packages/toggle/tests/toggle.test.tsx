/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@lib/utils';
import Toggle, { ToggleProps, WrapperLabel, ToggleInput } from '../../src/Toggle';

const onChangeEvent = jest.fn();

describe('Toggle', () => {
  const props: ToggleProps = {
    id: 'switcher id',
    onChange: onChangeEvent,
    messageId: 'Action name'
  };
  it('renders switcher component', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Toggle {...props} />));
    expect(wrapper.find(Toggle)).toHaveLength(1);
    expect(wrapper.find(WrapperLabel)).toEqual({});
  });

  it('renders switcher with label', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(<Toggle {...props} messageId="serp.filters.topAngebote" />)
    );
    expect(wrapper.find(Toggle)).toHaveLength(1);
    expect(wrapper.find(WrapperLabel)).toHaveLength(1);
  });

  it('renders switcher disabled', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Toggle {...props} disabled />));
    expect(wrapper.find(ToggleInput).prop('disabled')).toEqual(true);
  });

  it('switcher event is triggered', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Toggle {...props} onChange={onChangeEvent} />));
    expect(wrapper).toBeDefined();

    wrapper
      .find(ToggleInput)
      .first()
      .simulate('change', { target: { value: '' } });
    expect(onChangeEvent).toBeCalled();
  });
});
