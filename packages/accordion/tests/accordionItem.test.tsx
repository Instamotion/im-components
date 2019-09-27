/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { AccordionItem } from '../src';

describe('AccordionItem', () => {
  it('should render', () => {
    const wrapper = mount(
      <AccordionItem title="A heading" className="extra-class">
        Lorem ipsum.
      </AccordionItem>
    );
    expect(wrapper.find('div > .accordion__heading')).toHaveLength(1);
  });

  it('should update the item open state when the `open` prop changes', () => {
    const wrapper = mount(
      <AccordionItem title="A heading" open>
        Lorem ipsum.
      </AccordionItem>
    );

    expect(
      wrapper
        .find(`.accordion__item`)
        .first()
        .hasClass(`accordion__item--active`)
    ).toBe(true);

    wrapper.setProps({ open: false });
    wrapper.update();

    expect(
      wrapper
        .find(`.accordion__item`)
        .first()
        .hasClass(`accordion__item--active`)
    ).toBe(false);
  });

  it('should call `onHeadingClick` when the accordion header is clicked', () => {
    const onHeadingClick = jest.fn();
    const wrapper = mount(
      <AccordionItem title="A heading" open onHeadingClick={onHeadingClick}>
        Lorem ipsum.
      </AccordionItem>
    );
    wrapper
      .find('.accordion__heading')
      .first()
      .simulate('click');
    expect(onHeadingClick).toHaveBeenCalledTimes(1);
  });
});
