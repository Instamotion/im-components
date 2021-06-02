/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { RadioButtonCard } from '../src';

describe('radioButtonCard', () => {
  it('renders', () => {
    const wrapper = mount(<RadioButtonCard onChange={undefined} value={''} label={''} />);

    expect(wrapper).toBeDefined();
  });
});
