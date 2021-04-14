/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import FinancingTab from '../src';

describe('FinancingTab', () => {
  it('renders', () => {
    const wrapper = mount(<FinancingTab />);

    expect(wrapper).toBeDefined();
  });
});
