/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import HowItWorks, { HowItWorksProps } from '../src';
import messages from '../utils/locales';

describe('howItWorks', () => {
  it('How It Works component renders', () => {
    const props: HowItWorksProps = {
      currentStep: 1,
      items: [
        'Selecting the car and configure financing',
        'Request the car and financing',
        'Financing confirmation',
        'Rechnungserhalt'
      ]
    };

    const wrapper = mount(renderWithThemeAndI18n(<HowItWorks {...props} />, 'de', messages));

    expect(wrapper).toBeDefined();
  });
});
