/* eslint-env jest */
import React, { useState } from 'react';
import { mount } from 'enzyme';

import ButtonToggle, { ButtonToggleItemProps, ButtonToggleProps } from '../src';
import { ButtonToggleItem } from '../src/buttonToggle';

const firstButton: ButtonToggleItemProps<number> = { label: '1', value: 1 };
const secondButton: ButtonToggleItemProps<number> = { label: '2', value: 2 };
const thirdButton: ButtonToggleItemProps<number> = { label: '3', value: 3, disabled: true };
const TestComponent = () => {
  const [selectedItem, setSelectedItem] = useState<number>(2);
  return (
    <ButtonToggle<number>
      items={[firstButton, secondButton, thirdButton]}
      selected={selectedItem}
      onChange={selected => {
        setSelectedItem(selected);
      }}
    />
  );
};

describe('ButtonToggle', () => {
  it('renders', () => {
    const wrapper = mount(<TestComponent />);
    const buttons = wrapper
      .find(ButtonToggle)
      .childAt(0)
      .children()
      .children();

    expect(buttons.children()).toHaveLength(3);
  });

  it('toggles active button on click', () => {
    const wrapper = mount(<TestComponent />);
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
    const wrapper = mount(<TestComponent />);
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
