/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import { renderIcon } from '../src/oldFooter/defaultFooter';
import TrustfulSection from '../src/oldFooter/trustfulSection';
import TrustfulHeading from '../src/oldFooter/trustfulSection/trustfulHeading';
import MenuItem from '../src/oldFooter/menu/menuItem';
import Copyrights from '../src/oldFooter/copyrights';
import Footer, { FooterVariant } from '../src';
import AllianzLogo from '../src/oldFooter/assets/AllianzLogo';
import messages from '../utils/locales';

describe('Global | Footer', () => {
  it('renders default variant', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <Footer variant={FooterVariant.old} googleToken="" facebookToken="" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(TrustfulSection).length).toEqual(1);
    expect(wrapper.find(TrustfulHeading).length).toEqual(2);
  });

  it('default variant have menu items', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <Footer variant={FooterVariant.old} googleToken="" facebookToken="" />,
        'de',
        messages
      )
    );
    expect(wrapper.find(MenuItem)).toHaveLength(6);
  });

  it('default variant has social container', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <Footer variant={FooterVariant.old} googleToken="" facebookToken="" />,
        'de',
        messages
      )
    );
    expect(wrapper.find('SocialContainerComponent')).toHaveLength(1);
  });

  it('default variant has copyrights section', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <Footer variant={FooterVariant.old} googleToken="" facebookToken="" />,
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
