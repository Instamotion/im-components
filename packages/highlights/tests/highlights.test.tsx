/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Highlights, { HighlightsProps } from '../src';

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

describe('highlights', () => {
  it('renders', () => {
    const wrapper = mount(<Highlights {...props} />);

    expect(wrapper).toBeDefined();
  });
});
