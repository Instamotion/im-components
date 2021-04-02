import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import Highlights, { HighlightsProps } from '../src';

let stories = storiesOf('Highlights', module);

stories.add('pdp', () => {
  const props: HighlightsProps = {
    order: ['mileage', 'registrationDate', 'power', 'gear', 'preOwners', 'fuel'],
    condition: 'NEW',
    mileage: 10,
    fuel: 'ELECTRICITY',
    gear: 'AUTOMATIC_GEAR',
    registrationDate: '2010.',
    power: 60,
    consumption: 10,
    preOwners: 3
  };

  return renderWithThemeAndI18n(<Highlights {...props} />);
});

stories.add('checkout', () => {
  const props: HighlightsProps = {
    order: ['mileage', 'registrationDate', 'power', 'gear', 'preOwners', 'fuel'],
    condition: 'NEW',
    mileage: 10,
    fuel: 'ELECTRICITY',
    gear: 'AUTOMATIC_GEAR',
    registrationDate: '2010.',
    power: 60,
    consumption: 10,
    preOwners: 3,
    displayWithShadow: true
  };

  return renderWithThemeAndI18n(<Highlights {...props} />);
});
