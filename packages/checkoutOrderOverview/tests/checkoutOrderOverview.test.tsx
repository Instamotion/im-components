/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import CheckoutOrderOverview, {
  CheckoutOrderOverviewProps,
  CarDetails,
  translationStrings
} from '../src';

const car: CarDetails = {
  image: 'https://cdn-carpics.instamotion.com/VXKUHZKXZL4189502/gallery/closed_large/image_01.jpg',
  make: 'Audi',
  model: 'A3',
  price: 13000
};

describe('checkoutOrderOverview', () => {
  it('renders', () => {
    const props: CheckoutOrderOverviewProps = {
      translations: translationStrings,
      fullPrice: 13175,
      deliveryPrice: 100,
      registrationPrice: 75,
      car
    };

    const wrapper = mount(<CheckoutOrderOverview {...props} />);

    expect(wrapper).toBeDefined();
  });
});
