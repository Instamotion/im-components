import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import CarTile, { CarTileProps } from '../src';

storiesOf('General | CarTile', module).add('Common car tile', () => {
  const carDetails = {
    id: 'SJNFEAF15U7135383',
    className: 'SJNFEAF15U7135383',
    image: text(
      'imagePath',
      'https://cdn-carpics.instamotion.com/SJNFEAF15U7135383/gallery/closed_large/image_01.jpg?d=600x375'
    ),
    make: text('make', 'Nissan'),
    model: text('model', 'Juke'),
    modelDescription: text('modelDescription', 'Juke 1.2 DIG-T Acenta 4x2 StartStop Euro 6 Klima'),
    price: text('price', '26928'),
    monthlyInstallment: number('monthlyInstallment', 106),
    mileage: text('mileage', '1519'),
    power: number('power', 44),
    firstRegistration: text('firstRegistration', '2019.02'),
    fuel: text('fuel', 'DIESEL'),
    gearbox: text('gearbox', 'MANUAL_GEAR'),
    condition: text('condition', 'USED'),
    consumptionCombined: text('consumptionCombined', '6.9'),
    co2: text('co2', '105'),
    order: 1
  };
  return renderWithThemeAdnI18n(<CarTile {...carDetails} />);
});
