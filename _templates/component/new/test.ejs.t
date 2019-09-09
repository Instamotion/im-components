---
to: packages/<%= name %>/tests/<%= name %>.test.tsx
---
/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import <%= name %> from '../src';

describe('<%= name %>', () => {
  it('renders', () => {
    const wrapper = mount(<<%= name %> />);

    expect(wrapper).toBeDefined();
  });
});
