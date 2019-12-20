/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import BrandingLogo from '@im-ui/branding-logo';
import Header, { HeaderWrapper } from '../src';
import messages from '../utils/locales';

describe('Header', () => {
  it('header rendered', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <Header phoneNumber="089-411151-100" favoritesCount={0} />,
        'de',
        messages
      )
    );
    expect(wrapper.find(HeaderWrapper).length).toEqual(1);
  });
  it('all logos rendered', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <Header phoneNumber="089-411151-100" favoritesCount={0} />,
        'de',
        messages
      )
    );
    expect(wrapper.find(BrandingLogo).length).toEqual(1);
  });
});
