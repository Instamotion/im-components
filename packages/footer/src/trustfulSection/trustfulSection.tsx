import * as React from 'react';
import styled from 'styled-components';
import Carousel from '@instamotion/carousel';
import TrustfulLogo from './trustfulLogo';
import TrustfulPanel from './trustfulPanel';
import TrustfulHeading from './trustfulHeading';
import theme from '@instamotion/theme';

const slides = [
  {
    slideName: 'trustful_slide_one',
    slide: (
      <>
        <TrustfulLogo logoName="autobild" />
        <TrustfulLogo logoName="rtl" />
        <TrustfulLogo logoName="welt" />
      </>
    )
  },
  {
    slideName: 'trustful_slide_two',
    slide: (
      <>
        <TrustfulLogo logoName="servus" />
        <TrustfulLogo logoName="autohaus" />
        <TrustfulLogo logoName="dmax" />
      </>
    )
  }
];

interface TrustfulSectionComponentProps {
  className?: string;
}

const TrustfulSectionComponent: React.FC<TrustfulSectionComponentProps> = ({ className }) => {
  return (
    <TrustfulSectionWrapper className={className}>
      <TrustfulCarouselWrapper>
        <Carousel heading={<TrustfulHeading />} slides={slides} />
      </TrustfulCarouselWrapper>
      <TrustfulPanel />
    </TrustfulSectionWrapper>
  );
};

const TrustfulSectionWrapper = styled.div`
  grid-area: trustfull;
`;

const TrustfulCarouselWrapper = styled.div`
  ${theme.mediaQueries.whenTablet} {
    display: none;
  }
`;

export const TrustfulSection = styled(TrustfulSectionComponent)`
  padding: 10px 0;
`;

export default TrustfulSection;
