/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Faq from '../src';

describe('faq', () => {
  it('renders', () => {
    const wrapper = mount(<Faq />);

    expect(wrapper).toBeDefined();
  });
});
