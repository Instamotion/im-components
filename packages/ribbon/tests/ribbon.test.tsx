/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Ribbon from '../src';

describe('ribbon', () => {
  it('renders', () => {
    const wrapper = mount(<Ribbon />);

    expect(wrapper).toBeDefined();
  });
});
