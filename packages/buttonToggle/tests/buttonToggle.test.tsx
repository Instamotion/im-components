/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import ButtonToggle, { ButtonToggleItemProps, ButtonToggleProps } from '../src';
import { ButtonToggleContainer, ButtonToggleItem } from '../src/buttonToggle';
import BrandingLogo from '../../brandingLogo/src';

describe('ButtonToggle', () => {
  const firstButton: ButtonToggleItemProps = { label: '1', value: 1 };
  const secondButton: ButtonToggleItemProps = { label: '2', value: 2 };
  const thirdButton: ButtonToggleItemProps = { label: '3', value: 3, disabled: true };

  const props: ButtonToggleProps = {
    items: [firstButton, secondButton, thirdButton],
    selected: 2,
    onChange: () => {}
  };

  it('renders', () => {
    const wrapper = mount(<ButtonToggle {...props} />);
    const buttons = wrapper
      .find(ButtonToggle)
      .childAt(0)
      .children()
      .children();

    expect(buttons.children()).toHaveLength(3);
  });

  it('toggles active button on click', () => {
    const wrapper = mount(<ButtonToggle {...props} />);
    expect(
      wrapper
        .find(ButtonToggleItem)
        .first()
        .prop('selected')
    ).toBeFalsy();
    wrapper
      .find(ButtonToggleItem)
      .first()
      .simulate('click');
    expect(
      wrapper
        .find(ButtonToggleItem)
        .first()
        .prop('selected')
    ).toBeTruthy();
  });

  it("doesn't toggle disabled button on click", () => {
    const wrapper = mount(<ButtonToggle {...props} />);
    expect(
      wrapper
        .find(ButtonToggleItem)
        .at(2)
        .prop('selected')
    ).toBeFalsy();
    wrapper
      .find(ButtonToggleItem)
      .first()
      .simulate('click');
    expect(
      wrapper
        .find(ButtonToggleItem)
        .at(2)
        .prop('selected')
    ).toBeFalsy();
  });
});
