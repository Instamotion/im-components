/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import BrandingLogo from '@im-ui/branding-logo';
import Header, { HeaderWrapper } from '../src';
import Link from '../src/items/link';
import messages from '../utils/locales';
import { AvailableColors } from '@im-ui/theme';

describe('Header', () => {
  it('header rendered', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <HeaderWrapper imgPath="" phoneNumber="089-411151-100" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(HeaderWrapper).length).toEqual(1);
  });
  it('all logos rendered', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <HeaderWrapper imgPath="" phoneNumber="089-411151-100" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(BrandingLogo).length).toEqual(3);
  });

  it('tramsparent variant applied', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <Header
          variant="transparent"
          isOpen={false}
          burgerClicked={() => {}}
          imgPath=""
          phoneNumber="089-411151-100"
        />,
        'de',
        messages
      )
    );
    expect(
      wrapper
        .find(BrandingLogo)
        .at(0)
        .prop('color')
    ).toEqual(AvailableColors.oil);
    expect(
      wrapper
        .find(BrandingLogo)
        .at(2)
        .prop('color')
    ).toEqual(AvailableColors.oil);
    expect(
      wrapper
        .find(Link)
        .at(0)
        .prop('color')
    ).toEqual('oil');
  });
  it('tramsparent variant applied', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <Header
          variant="dark"
          isOpen={false}
          burgerClicked={() => {}}
          imgPath=""
          phoneNumber="089-411151-100"
        />,
        'de',
        messages
      )
    );
    expect(
      wrapper
        .find(BrandingLogo)
        .at(0)
        .prop('color')
    ).toEqual(AvailableColors.white);
    expect(
      wrapper
        .find(BrandingLogo)
        .at(2)
        .prop('color')
    ).toEqual('#138');
    expect(
      wrapper
        .find(Link)
        .at(0)
        .prop('color')
    ).toEqual('white');
  });
});
