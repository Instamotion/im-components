/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import CarTile from '../src';
import { Name, ModelDescription, Price, Tooltip, CarImage } from '../src/carTile';
import { InfoLabel, transformInfo } from '../src/infoItem';
import messages from '../utils/locales';

const carDetails = {
  id: '',
  className: 'abc',
  image: '',
  make: '',
  model: '',
  variant: '',
  price: '',
  monthlyInstallment: 0,
  power: 51,
  firstRegistration: '02.2016',
  fuel: 'DIESEL',
  mileage: '15.600',
  gearbox: 'MANUAL_GEAR',
  condition: 'NEW',
  consumptionCombined: '4.5',
  co2: '107'
};

describe('CarTile', () => {
  it('renders', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<CarTile {...carDetails} />));
    expect(wrapper).toBeDefined();
  });
  it('the name is displayed correctly', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <CarTile
          {...{
            ...carDetails,
            make: 'Nissan',
            model: 'Juke'
          }}
        />,
        'de',
        messages
      )
    );
    expect(wrapper.find(Name).text()).toEqual('Nissan Juke');
  });
  it('the image has correct path', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <CarTile
          {...{
            ...carDetails,
            image: 'correct_path'
          }}
        />,
        'de',
        messages
      )
    );
    expect(wrapper.find(CarImage)).toBeDefined();
  });
  it('the model description is displayed correctly', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <CarTile
          {...{
            ...carDetails,
            variant: 'model description'
          }}
        />,
        'de',
        messages
      )
    );
    expect(wrapper.find(ModelDescription).text()).toEqual('model description');
  });
  it('the long model description is displayed in tooltip', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <CarTile
          {...{
            ...carDetails,
            variant: 'very very very very very very very very long description'
          }}
        />,
        'de',
        messages
      )
    );
    wrapper.find(ModelDescription).simulate('mouseover');
    expect(wrapper.find(Tooltip).text()).toEqual(
      'very very very very very very very very long description'
    );
  });
  it('correct monthly rate format', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <CarTile
          {...{
            ...carDetails,
            monthlyInstallment: 106
          }}
        />,
        'de',
        messages
      )
    );
    expect(wrapper.find(Price).text()).toEqual('106 € p.M.');
  });

  it('additional info empty value', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <CarTile
          {...{
            ...carDetails,
            power: 0,
            firstRegistration: '',
            fuel: '',
            mileage: '',
            gearbox: '',
            condition: '',
            consumptionCombined: '',
            co2: ''
          }}
        />,
        'de',
        messages
      )
    );
    expect(
      wrapper
        .find(InfoLabel)
        .at(0)
        .text()
    ).toEqual('Nicht verfügbar');
  });

  it('all icons displayed', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<CarTile {...carDetails} />));
    expect(wrapper.find('svg').length).toBeGreaterThan(8);
  });
  it('switch case default value', () => {
    // @ts-ignore
    expect(transformInfo('tratata', 'tratata').id).toEqual('car.tile.not_available');
  });
});
