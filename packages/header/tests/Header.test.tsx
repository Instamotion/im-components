/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import BrandingLogo from '@im-ui/branding-logo';
import Header from '../src';
import messages from '../utils/locales';

describe('Header', () => {
  it('rendered correct variant', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(<Header variant="dark" imgPath="" />, 'de', messages)
    );
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('both logos rendered', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(<Header variant="dark" imgPath="" />, 'de', messages)
    );
    expect(wrapper.find(BrandingLogo).length).toEqual(2);
  });

  it('internalization applied', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(<Header variant="dark" imgPath="" />, 'de', messages)
    );
    expect(wrapper.find(messages.de['header.menu.search']).length).toEqual(1);
  });
});
