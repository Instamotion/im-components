/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import { renderIcon } from '../src/defaultFooter';
import TrustfulSection from '../src/trustfulSection';
import TrustfulHeading from '../src/trustfulSection/trustfulHeading';
import MenuItem from '../src/menu/menuItem';
import SocialContainer from '../src/social/socialContainer';
import Copyrights from '../src/copyrights';
import CheckoutFooter from '../src/checkoutFooter';
import Footer from '../src';
import AllianzLogo from '../src/assets/AllianzLogo';
import messages from '../utils/locales';

describe('Global | Footer', () => {
  it('renders correct variant', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Footer variant="minimal" />, 'de', messages));
    expect(wrapper.find(CheckoutFooter).length).toEqual(1);
  });

  it('renders default variant', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <Footer variant="full" googleToken="" facebookToken="" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(TrustfulSection).length).toEqual(1);
    expect(wrapper.find(TrustfulHeading).length).toEqual(2);
  });

  it('default variant have menu items', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <Footer variant="full" googleToken="" facebookToken="" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(MenuItem)).toHaveLength(6);
  });

  it('default variant has social container', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <Footer variant="full" googleToken="" facebookToken="" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(SocialContainer)).toHaveLength(1);
  });

  it('default variant has copyrights section', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <Footer variant="full" googleToken="" facebookToken="" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(Copyrights)).toHaveLength(1);
  });

  it('default variant renderIcon() test', () => {
    const allianzLogo = 'AllianzLogo';
    expect(renderIcon(allianzLogo)).toEqual(<AllianzLogo />);
  });
});
