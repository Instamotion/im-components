/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import Accordion, { AccordionItem } from '../src';

describe('Accordion', () => {
  it('renders', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <Accordion>
          <AccordionItem className="child" title="Heading A" open>
            Panel A
          </AccordionItem>
          <AccordionItem className="child" title="Heading B">
            Panel B
          </AccordionItem>
          <AccordionItem className="child" title="Heading C">
            Panel C
          </AccordionItem>
        </Accordion>
      )
    );

    expect(wrapper.find('.child')).toHaveLength(3);
  });
});
