---
to: packages/<%= name %>/tests/<%= name %>.test.tsx
---
/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import <%= h.changeCase.pascalCase(name) %> from '../src';

describe('<%= name %>', () => {
  it('renders', () => {
    const wrapper = mount(<<%= h.changeCase.pascalCase(name) %> />);

    expect(wrapper).toBeDefined();
  });
});
