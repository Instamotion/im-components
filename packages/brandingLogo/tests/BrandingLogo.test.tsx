import React from 'react';
import { mount } from 'enzyme';
import BrandingLogo from '../src';

describe('BrandingLogo', () => {
  it('renders Allianz logo properly', () => {
    const wrapper = mount(<BrandingLogo link="#" brandingHolder="Allianz" />);

    expect(wrapper.html().includes('svg')).toBe(true);
  });

  it('renders Instamotion logo properly', () => {
    const wrapper = mount(<BrandingLogo link="#" brandingHolder="Instamotion" />);

    expect(wrapper.html().includes('svg')).toBe(true);
  });

  it('renders colored Instamotion logo', () => {
    const wrapper = mount(<BrandingLogo link="#" color="red" brandingHolder="Instamotion" />);

    expect(wrapper.find(BrandingLogo).prop('color')).toEqual('red');
  });
});
