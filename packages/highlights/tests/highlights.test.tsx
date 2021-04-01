/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Highlights from '../src';

describe('highlights', () => {
  it('renders', () => {
    const wrapper = mount(<Highlights />);

    expect(wrapper).toBeDefined();
  });
});
