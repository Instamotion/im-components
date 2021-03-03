/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import ImHeader, { HeaderTypes } from '../src';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import messages from '../utils/locales';

describe('imHeader', () => {
  it('renders', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <ImHeader type={HeaderTypes.new} phoneNumber="089-411151-100" favoritesCount={0} />,
        'de',
        messages
      )
    );

    expect(wrapper).toBeDefined();
  });
});
