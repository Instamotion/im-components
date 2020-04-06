/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Tabs from '../src';

describe('tabs', () => {
  it('renders', () => {
    const wrapper = mount(<Tabs />);

    expect(wrapper).toBeDefined();
  });
});
