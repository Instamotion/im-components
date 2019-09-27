import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import Accordion from '../src';
import { AccordionItem } from '../src';

storiesOf('Controls | Accordion', module).add('default', () => {
  const props = {
    onClick: action('onClick'),
    onHeadingClick: action('onHeadingClick')
  };

  return (
    <Accordion>
      <AccordionItem
        title={text('The title (title)', 'Section 1 title')}
        open={boolean('Open the section 1 (open)', true)}
        {...props}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem
        title={text('The title (title)', 'Section 2 title')}
        open={boolean('Open the section 2 (open)', false)}
        {...props}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
    </Accordion>
  );
});
