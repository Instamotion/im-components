/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '@instamotion/theme';
import BrandingLogo from '../src';

describe('BrandingLogo', () => {
  it('renders Allianz logo properly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <BrandingLogo link="#" brandingHolder="Allianz" />
      </ThemeProvider>
    );

    expect(wrapper.html().includes('test-file-stub')).toBe(true);
  });

  it('renders Instamotion logo properly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <BrandingLogo link="#" brandingHolder="Instamotion" />
      </ThemeProvider>
    );

    expect(wrapper.html().includes('test-file-stub')).toBe(true);
  });

  it('renders colored Instamotion logo', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <BrandingLogo link="#" color="red" brandingHolder="Instamotion" />
      </ThemeProvider>
    );

    expect(wrapper.find(BrandingLogo).prop('color')).toEqual('red');
  });
});
