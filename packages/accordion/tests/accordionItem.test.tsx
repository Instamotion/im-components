/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { AccordionItem, AccordionItemContent } from '../src';

describe('AccordionItem', () => {
  it('AccordionItem rendered', () => {
    const wrapper = mount(<AccordionItem title="A heading">Lorem ipsum.</AccordionItem>);
    expect(wrapper.find(AccordionItem)).toHaveLength(1);
  });

  it('Content block open by default', () => {
    const wrapper = mount(
      <AccordionItem title="A heading" open>
        Lorem ipsum.
      </AccordionItem>
    );
    expect(wrapper.find(AccordionItemContent)).toHaveLength(1);
  });

  it('Must not render content block', () => {
    const wrapper = mount(
      <AccordionItem title="A heading" open={false}>
        Lorem ipsum.
      </AccordionItem>
    );
    expect(wrapper.find(AccordionItemContent)).toHaveLength(0);
  });
});
