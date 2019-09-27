/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@insta-ui/utils';
import toJson from 'enzyme-to-json';
import Tooltip from '../src';

describe('Tooltip', () => {
  it('renders', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<Tooltip icon={<i />}>Test</Tooltip>));
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
