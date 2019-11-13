/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import toJson from 'enzyme-to-json';
import Tooltip from '../src';

describe('Tooltip', () => {
  it('renders', () => {
    const wrapper = mount(renderWithThemeAndI18n(<Tooltip icon={<i />}>Test</Tooltip>));
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
