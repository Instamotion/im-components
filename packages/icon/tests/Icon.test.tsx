/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Icon, { IconWrapper } from '../src';

describe('Icon', () => {
  it('defined', () => {
    const wrapper = mount(<Icon iconName="file" />);
    expect(wrapper.find(IconWrapper)).toBeDefined();
  });
  it('renders', () => {
    const wrapper = mount(<Icon iconName="file" />);
    expect(wrapper.find(IconWrapper)).toHaveLength(1);
  });
});
