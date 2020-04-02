/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import InfoItem from '../src';

describe('infoItem', () => {
  it('renders', () => {
    const wrapper = mount(<InfoItem />);

    expect(wrapper).toBeDefined();
  });
});
