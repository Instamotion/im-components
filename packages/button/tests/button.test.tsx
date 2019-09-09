/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import Button from '../src';

describe('Button', () => {
  it('renders', () => {
    const wrapper = mount(<Button>Test</Button>);
    expect(wrapper.find('button').text()).toEqual('Test');
  });
});
