import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel, { CarouselProps } from '../src';

storiesOf('Carousel', module).add('Carousel component', () => {
  const slides = [
    {
      slideName: 'slide#1',
      slide: <h2>slide1</h2>
    },
    {
      slideName: 'slide#2',
      slide: <h2>slide2</h2>
    },
    {
      slideName: 'slide#3',
      slide: <h2>slide3</h2>
    },
    {
      slideName: 'slide#4',
      slide: <h2>slide4</h2>
    },
    {
      slideName: 'slide#5',
      slide: <h2>slide5</h2>
    }
  ];

  const props: CarouselProps = {
    heading: <span>Test Carousel</span>,
    slides
  };

  return <Carousel {...props} />;
});
