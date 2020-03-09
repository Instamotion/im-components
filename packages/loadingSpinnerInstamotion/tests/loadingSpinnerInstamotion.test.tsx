/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import LoadingSpinnerInstamotion from '../src';

describe('LoadingSpinnerInstamotion', () => {
  it('renders', () => {
    const wrapper = mount(<LoadingSpinnerInstamotion />);
    expect(wrapper).toBeDefined();
  });
});
