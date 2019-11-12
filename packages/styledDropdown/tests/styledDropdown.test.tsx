/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import StyledDropdown from '../src';

describe('styledDropdown', () => {
  it('renders', () => {
    const wrapper = mount(<StyledDropdown />);

    expect(wrapper).toBeDefined();
  });
});
