/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DropdownOptionProps } from '@im-ui/dropdown';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import { RangeDropdownProps } from '../src';
import { RangeDropdown, renderSelector, formRange, sendData } from '../src/rangeDropdown';

const optionsFrom: DropdownOptionProps[] = [
  { value: 'from', label: 'from' },
  { value: '100', label: '100' },
  { value: '200', label: '200' },
  { value: '300', label: '300' }
];

const optionsTo: DropdownOptionProps[] = [
  { value: 'to', label: 'to' },
  { value: '100', label: '100' },
  { value: '200', label: '200' },
  { value: '300', label: '300' }
];

const props: RangeDropdownProps = {
  label: 'RangeDropdownMain',
  id: 'dropdown-1',
  placeholderFrom: 'from',
  placeholderTo: 'to',
  optionsFrom,
  optionsTo
};

// TODO: write extended test suite

describe('RangeDropdown Input', () => {
  it('component renders correctly', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<RangeDropdown {...props} />, 'de'));

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('handle value', () => {
    it('should keep the order when "from"', () => {
      expect(formRange('from', 1, 2)).toEqual([1, 2]);
    });
    it('should flip the values when setting "to"', () => {
      expect(formRange('to', 3, 1)).toEqual([1, 3]);
    });
  });

  describe('sendData', () => {
    it('should call the callback', () => {
      const setRange = jest.fn();
      sendData('placeholder', setRange, jest.fn())([1, 2]);
      expect(setRange).toBeCalledWith([1, 2]);
    });

    it('should call the callback with the correct range', () => {
      const setRange = jest.fn();
      sendData('placeholder', setRange, jest.fn())([3, 2]);
      expect(setRange).toBeCalledWith([2, 3]);
    });

    it('should handle strings 1', () => {
      const setRange = jest.fn();
      sendData('placeholder', setRange, jest.fn())(['100', '20']);
      expect(setRange).toBeCalledWith([20, 100]);
    });

    it('should use placeholder whem from value is not a string or number', () => {
      const setRange = jest.fn();
      sendData('from', setRange, jest.fn())(['qwe', '20']);
      expect(setRange).toBeCalledWith(['from', 20]);
    });

    it('should use placeholder whem from value is not a string or number', () => {
      const setRange = jest.fn();
      sendData('to', setRange, jest.fn())(['10', 'whuut']);
      expect(setRange).toBeCalledWith([10, 'to']);
    });

    it('should call the callback with the correct range', () => {
      const setRange = jest.fn();
      sendData('placeholder', setRange, jest.fn())(['', 2]);
      expect(setRange).toBeCalledWith(['placeholder', 2]);
    });

    it('should call the callback with the correct range', () => {
      const setRange = jest.fn();
      sendData('placeholder', setRange, jest.fn())([2, '']);
      expect(setRange).toBeCalledWith([2, 'placeholder']);
    });

    it('should use the defaul value instead of wrong input', () => {
      const setRange = jest.fn();
      sendData('placeholder', setRange, jest.fn())([2, false as any]);
      expect(setRange).toBeCalledWith([2, 'placeholder']);
    });

    it('should call the onChange callback when it is provided', () => {
      const onChange = jest.fn();
      sendData('', jest.fn(), onChange)([2, 2]);
      expect(onChange).toBeCalled();
    });

    it('should not call the onChange it is not provided, cap', () => {
      const onChange = jest.fn();
      sendData('', jest.fn())([2, 2]);
      expect(onChange).not.toBeCalled();
    });
  });

  describe('renderSelector', () => {
    it('renders', () => {
      const setRange = jest.fn();
      const propagateRange = jest.fn();
      const options: DropdownOptionProps[] = [{ value: 1, label: 'This is one' }];
      const component = renderSelector(
        'test-1',
        'from',
        'from',
        1,
        2,
        options,
        setRange,
        propagateRange
      );
      const wrapper = mount(renderWithThemeAdnI18n(component));
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call the onChange callback when input chaged', () => {
      const setRange = jest.fn();
      const propagateRange = jest.fn();
      const options: DropdownOptionProps[] = [{ value: 1, label: 'This is one' }];
      const component = renderSelector(
        'test-1',
        'from',
        'from',
        1,
        2,
        options,
        setRange,
        propagateRange
      );
      const wrapper = mount(renderWithThemeAdnI18n(component));
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: '100' } });
      expect(setRange).toBeCalledWith(['100', 2]);
    });

    it('should call the onBlur callback when blur event occured', () => {
      const setRange = jest.fn();
      const propagateRange = jest.fn();
      const options: DropdownOptionProps[] = [{ value: 1, label: 'This is one' }];
      const component = renderSelector(
        'test-1',
        'from',
        'from',
        1,
        2,
        options,
        setRange,
        propagateRange
      );
      const wrapper = mount(renderWithThemeAdnI18n(component));
      const input = wrapper.find('input');
      input.simulate('blur');
      expect(propagateRange).toBeCalledWith(['1', 2]);
    });

    it('should call the onChange callback when select value changed', () => {
      const setRange = jest.fn();
      const propagateRange = jest.fn();
      const options: DropdownOptionProps[] = [{ value: 1, label: 'This is one' }];
      const component = renderSelector(
        'test-1',
        'from',
        'from',
        1,
        2,
        options,
        setRange,
        propagateRange
      );
      const wrapper = mount(renderWithThemeAdnI18n(component));
      wrapper.find('select').simulate('change', { target: { value: '100' } });
      expect(propagateRange).toBeCalledWith(['100', 2]);
    });
  });

  it('have 2 inputs with correct id', () => {
    const wrapper = mount(renderWithThemeAdnI18n(<RangeDropdown {...props} />));
    const input = wrapper.find('input');
    expect(input.first().props().id).toEqual('from-input-dropdown-1');
    expect(input.last().props().id).toEqual('to-input-dropdown-1');
  });
});
