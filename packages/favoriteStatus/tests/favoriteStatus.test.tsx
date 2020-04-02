/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import FavoriteStatus from '../src';

describe('favoriteStatus', () => {
  it('renders', () => {
    const wrapper = mount(<FavoriteStatus />);

    expect(wrapper).toBeDefined();
  });
});
