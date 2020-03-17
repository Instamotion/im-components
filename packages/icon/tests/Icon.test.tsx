/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Icon, { IconStyled } from '../src';

describe('Icon', () => {
  it('defined', () => {
    const wrapper = mount(<Icon icon="file" />);
    expect(wrapper.find(IconStyled)).toBeDefined();
  });
  it('renders', () => {
    const wrapper = mount(<Icon icon="file" />);
    expect(wrapper.find(IconStyled)).toHaveLength(1);
  });
});
