/* eslint-env jest */
import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import theme from '@im-ui/theme';
import Label from '../src';

describe('Label', () => {
  it('renders label', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Label messageId="Test" />));
    expect(wrapper.find(Label).text()).toEqual('Test');
  });
  it('enabled label', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Label messageId="label" />));
    expect(wrapper.find(Label)).toHaveStyleRule('color', theme.color.brightGrey);
  });
  it('disabled label', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Label messageId="label" disabled />));
    expect(wrapper.find(Label)).toHaveStyleRule('color', theme.color.silver);
  });
  it('disabled label', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Label messageId="required" required />));
    expect(wrapper.find(Label).text()).toEqual('required*');
  });
});
