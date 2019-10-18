/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Pagination from '../src';
import PaginationPrev from '../src/views/paginationPrev';
import PaginationNext from '../src/views/paginationNext';

import messages from '../utils/locales';

describe('Pagination', () => {
  it('renders', () => {
    const cb = jest.fn();
    const props = {
      currentPage: 1,
      totalPages: 56,
      pagePadding: 2,
      onPageChange: () => cb
    };

    const wrapper = mount(renderWithThemeAdnI18n(<Pagination {...props} />));

    expect(wrapper.find('li')).toHaveLength(9);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should navigate', () => {
    const props = {
      currentPage: 1,
      totalPages: 56,
      pagePadding: 2,
      onPageChange: jest.fn()
    };

    const wrapper = mount(renderWithThemeAdnI18n(<Pagination {...props} />));
    const firstPage = wrapper.find('li').at(0);

    firstPage.simulate('click');

    expect(props.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should navigate by click on Prev button', () => {
    const props = {
      currentPage: 14,
      totalPages: 56,
      pagePadding: 2,
      onPageChange: jest.fn()
    };

    const wrapper = mount(renderWithThemeAdnI18n(<Pagination {...props} />));
    const PrevButton = wrapper.find(PaginationPrev);

    PrevButton.simulate('click');

    expect(props.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should navigate by click on Next button', () => {
    const props = {
      currentPage: 12,
      totalPages: 56,
      pagePadding: 2,
      onPageChange: jest.fn()
    };

    const wrapper = mount(renderWithThemeAdnI18n(<Pagination {...props} />));
    const NextButton = wrapper.find(PaginationNext);

    NextButton.simulate('click');

    expect(props.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should render only Prev button on the last page', () => {
    const props = {
      currentPage: 56,
      totalPages: 56,
      pagePadding: 2,
      onPageChange: jest.fn()
    };

    const wrapper = mount(renderWithThemeAdnI18n(<Pagination {...props} />));

    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should have correct text for button', () => {
    const props = {
      currentPage: 13,
      totalPages: 56,
      pagePadding: 2,
      onPageChange: jest.fn()
    };

    const wrapper = mount(renderWithThemeAdnI18n(<Pagination {...props} />, 'de', messages));

    // Previous button
    expect(
      wrapper
        .find('button')
        .at(0)
        .text()
    ).toEqual('Zurück');

    // Next button
    expect(
      wrapper
        .find('button')
        .at(1)
        .text()
    ).toEqual('Weiter');
  });
});
