/* eslint-env jest */
import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import theme from '@im-ui/theme';
import Label from '../src';

describe('Label', () => {
  it('renders label', () => {
    const wrapper = mount(renderWithThemeAndI18n(<Label text="Test" />));
    expect(wrapper.find(Label).text()).toEqual('Test');
  });
});
