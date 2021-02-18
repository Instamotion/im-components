import * as React from 'react';
import styled, { ThemedStyledProps, FlattenInterpolation, css } from 'styled-components';
import { theme } from '@themes/themesV4/default';
import InstamotionLogo from '../assets/Logo';
import AllianzLogo from '../assets/AllianzLogo';

const InstamotionWrapper = styled.div`
  width: 11.875rem;
  height: 1.625rem;

  svg {
    width: 11.875rem;
    height: 2.5rem;
  }
`;

const AllianzWrapper = styled.div`
  width: 5.625rem;
  height: 3.5rem;

  & svg {
    transform: scale(1.4);
  }
`;

const coloredLogo = (
  color: string,
  colorTwo: string
): FlattenInterpolation<ThemedStyledProps<any, any>> => css`
  .cls-1 {
    fill: ${color};
  }
  ,
  .cls-2 {
    fill: ${colorTwo};
  }
`;

const defaultLogoColor = css`
  g,
  path {
    fill: ${theme.color.white};
  }
`;

export const Brands = {
  Instamotion: (
    <InstamotionWrapper>
      <InstamotionLogo />
    </InstamotionWrapper>
  ),
  Allianz: (
    <AllianzWrapper>
      <AllianzLogo />
    </AllianzWrapper>
  )
};

export interface BrandingLogoProps {
  className?: string;
  brandingHolder: keyof typeof Brands;
  color?: string;
  colorTwo?: string;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const BrandingLogoComponent: React.FC<BrandingLogoProps> = ({
  onClick,
  link,
  brandingHolder,
  className
}) => (
  <a href={link} onClick={onClick} className={className}>
    {Brands[brandingHolder]}
  </a>
);

const BrandingLogo = styled(BrandingLogoComponent)`
  ${({ color, colorTwo }) => (color ? coloredLogo(color, colorTwo) : defaultLogoColor)}
`;

export default BrandingLogo;
