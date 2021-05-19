/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { ModalStyle } from '../src';

describe('Modal', () => {
  it('renders', () => {
    const wrapper = mount(<ModalStyle />);

    expect(wrapper).toBeDefined();
  });
});
