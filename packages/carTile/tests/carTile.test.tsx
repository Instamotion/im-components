/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAndI18n } from '@im-ui/utils';
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
  modelDescription: '',
  price: '',
  monthlyInstallment: 0,
  power: 51,
  firstRegistration: '02.2016',
  fuel: 'DIESEL',
  mileage: '15.600',
  gearbox: 'MANUAL_GEAR',
  condition: 'NEW',
  order: 1,
  consumptionCombined: '4.5',
  co2: '107'
};

describe('CarTile', () => {
  it('renders', () => {
    const wrapper = mount(renderWithThemeAndI18n(<CarTile {...carDetails} />));
    expect(wrapper).toBeDefined();
  });
  it('the name is displayed correctly', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <CarTile
          {...{
            ...carDetails,
            make: 'Nissan',
            model: 'Juke'
          }}
        />
      )
    );
    expect(wrapper.find(Name).text()).toEqual('Nissan Juke');
  });
  it('the image has correct path', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <CarTile
          {...{
            ...carDetails,
            image: 'correct_path'
          }}
        />
      )
    );
    expect(wrapper.find(CarImage)).toBeDefined();
  });
  it('the model description is displayed correctly', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <CarTile
          {...{
            ...carDetails,
            modelDescription: 'model description'
          }}
        />
      )
    );
    expect(wrapper.find(ModelDescription).text()).toEqual('model description');
  });
  it('the long model description is displayed in tooltip', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <CarTile
          {...{
            ...carDetails,
            modelDescription: 'very very very very very very very very long description'
          }}
        />
      )
    );
    wrapper.find(ModelDescription).simulate('mouseover');
    expect(wrapper.find(Tooltip).text()).toEqual(
      'very very very very very very very very long description'
    );
  });
  it('correct monthly rate format', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <CarTile
          {...{
            ...carDetails,
            monthlyInstallment: 106
          }}
        />
      )
    );
    expect(wrapper.find(Price).text()).toEqual('106,– € p.M.');
  });
  it('Check monthly rate with empty/zero value', () => {
    const wrapper = mount(
      renderWithThemeAdnI18n(
        <CarTile
          {...{
            ...carDetails,
            monthlyInstallment: 0
          }}
        />
      )
    );
    expect(wrapper.find(Price).text()).toEqual('0,– € p.M.');
  });
  it('additional info empty value', () => {
    const wrapper = mount(
      renderWithThemeAndI18n(
        <CarTile
          {...{
            ...carDetails,
            power: 0,
            firstRegistration: '',
            fuel: '',
            mileage: '',
            gearBox: '',
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
    const wrapper = mount(renderWithThemeAndI18n(<CarTile {...carDetails} />));
    expect(wrapper.find('svg').length).toBeGreaterThan(8);
  });
  it('switch case default value', () => {
    // @ts-ignore
    expect(transformInfo('tratata', 'tratata').id).toEqual('car.tile.not_available');
  });
});
