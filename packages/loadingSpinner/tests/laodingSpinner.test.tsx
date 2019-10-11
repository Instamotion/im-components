/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import LoadingSpinner from '../src';

describe('LoadingSpinner', () => {
  it('renders', () => {
    const wrapper = mount(<LoadingSpinner />);
    expect(wrapper).toBeDefined();
  });
});
