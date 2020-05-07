import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import CheckoutOrderOverview, {
  CheckoutOrderOverviewProps,
  CarDetails,
  translationStrings,
  Fuel
} from '../src';

const car: CarDetails = {
  image: 'https://cdn-carpics.instamotion.com/VXKUHZKXZL4189502/gallery/closed_large/image_01.jpg',
  make: 'Audi',
  model: 'A3',
  offerID: '123',
  mileage: 14000,
  co2: 100,
  consumptionCombined: 8,
  consumptionUnit: 'bananas/usa',
  firstRegistration: '74 BC',
  fuel: Fuel.Gas,
  power: 120,
  variant: 'red',
  price: 13000
};

storiesOf('Checkout Order Overview', module).add('Default', () => {
  const props: CheckoutOrderOverviewProps = {
    translations: translationStrings,
    fullPrice: 13175,
    deliveryPrice: 100,
    registrationPrice: 75,
    car
  };

  return renderWithThemeAndI18n(
    <CheckoutOrderOverview {...props}>Custom license plate</CheckoutOrderOverview>
  );
});
