/* eslint-env jest */
import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Checkbox, { CheckboxInput } from '../src';

const mockedOnChange = jest.fn();

const props = {
  id: 'someId',
  onChange: mockedOnChange,
  messageId: 'test label'
};

describe('Checkbox', () => {
  it('renders Checkbox component', () => {
    const wrapper = mount(renderWithThemeAndI18n(<Checkbox {...props} />));
    expect(wrapper).toBeDefined();
  });

  // it('check event is triggered', () => {
  //   const wrapper = mount(
  //     renderWithThemeAndI18n(<Checkbox {...props} onChange={mockedOnChange} />)
  //   );
  //   expect(wrapper).toBeDefined();

  //   wrapper
  //     .find(CheckboxInput)
  //     .first()
  //     .simulate('change', { target: { value: '' } });
  //   expect(mockedOnChange).toBeCalled();
  // });
});
