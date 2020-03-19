/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import HowItWorks from '../src';
import messages from '../utils/locales';

describe('howItWorks', () => {
  it('How It Works component renders', () => {
    const wrapper = mount(renderWithThemeAndI18n(<HowItWorks />, 'de', messages));

    expect(wrapper).toBeDefined();
  });
});
