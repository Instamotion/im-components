/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import { ThemeProvider } from 'styled-component';
import theme from '@instamotion/theme';
import Slide from '../src/slide';
import NavDot from '../src/navDot';
import NavArrow from '../src/navArrow';
import Carousel from '../src/carousel';

describe('Common | Carousel', () => {
  it('renders correct variant', () => {
    const slides = [
      {
        slideName: 'slide#1',
        slide: <h2>test slide1</h2>
      },
      {
        slideName: 'slide#2',
        slide: <h2>test slide1</h2>
      }
    ];
    const props = {
      sliderHeight: 150,
      slideWidth: 80,
      slides
    };

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Carousel {...props} />
      </ThemeProvider>
    );
    expect(wrapper.find(Carousel).length).toEqual(1);
    expect(wrapper.find(Slide).length).toEqual(2);

    expect(wrapper.find(NavArrow).length).toEqual(2);
    expect(
      wrapper
        .find(NavArrow)
        .at(0)
        .props().disabled
    ).toEqual(true);
    wrapper
      .find(NavArrow)
      .at(1)
      .simulate('click');
    expect(
      wrapper
        .find(NavArrow)
        .at(0)
        .props().disabled
    ).toEqual(false);
    expect(
      wrapper
        .find(NavArrow)
        .at(1)
        .props().disabled
    ).toEqual(true);

    expect(wrapper.find(NavDot).length).toEqual(slides.length);
    wrapper
      .find(NavArrow)
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find(NavDot)
        .at(0)
        .hasClass('active')
    ).toEqual(true);
    wrapper
      .find(NavDot)
      .at(1)
      .simulate('click');
    expect(
      wrapper
        .find(NavDot)
        .at(0)
        .hasClass('active')
    ).toEqual(false);
    expect(
      wrapper
        .find(NavDot)
        .at(1)
        .hasClass('active')
    ).toEqual(true);
  });
});
