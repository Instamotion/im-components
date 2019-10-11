import styled from 'styled-components';
import React, { ReactElement, useState } from 'react';
import Slide from './slide';
import NavDot from './navDot';
import NavArrow from './navArrow';
import { useSwipeable } from 'react-swipeable';

export interface CarouselProps {
    className?: string;
  heading?: ReactElement;
  slides: { slideName: string; slide: ReactElement }[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ className, heading, slides }) => {
  const [curIndex, setCurIndex] = useState(0);

  const prevSlide = (): void => {
    if (curIndex) {
      setCurIndex(curIndex - 1);
    }
  };
  const nextSlide = (): void => {
    if (curIndex < slides.length - 1) {
      setCurIndex(curIndex + 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className={className}>
      {heading}
      <CarouselContainer>
        <SlidesWrapper
          style={{
            width: `${100 * slides.length}%`,
            right: `${curIndex * 100}%`
          }}
          {...handlers}
        >
          {slides.map(slide => (
            <Slide key={slide.slideName}>{slide.slide}</Slide>
          ))}
        </SlidesWrapper>
      </CarouselContainer>
      <SliderNavigation>
        <NavArrow onClick={prevSlide} disabled={!curIndex}>
          &#8249;
        </NavArrow>
        <NavDots>
          {slides.map((slide, index) => (
            <NavDot
              onClick={() => setCurIndex(index)}
              className={curIndex === index ? 'active' : ''}
              key={slide.slideName}
            />
          ))}
        </NavDots>
        <NavArrow onClick={nextSlide} disabled={curIndex === slides.length - 1}>
          &#8250;
        </NavArrow>
      </SliderNavigation>
    </div>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin: auto;
  padding: 1rem 0 0.5rem;
`;

const Carousel = styled(CarouselComponent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const SlidesWrapper = styled.div`
  position: relative;
  transition: right 0.3s ease-in-out;
  display: flex;
  height: 100%;
`;

const SliderNavigation = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavDots = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export default Carousel;
