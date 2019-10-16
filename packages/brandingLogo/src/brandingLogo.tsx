import React from 'react';
import styled, { css, ThemedStyledProps, FlattenInterpolation } from 'styled-components';
import InstamotionLogo from './assets/im-logo.svg';
import AllianzLogo from './assets/allianz.svg';

const InstamotionWrapper = styled.div`
  width: 127px;
  height: 26px;
`;

const AllianzWrapper = styled.div`
  width: 90px;
  height: 56px;

  & svg {
    transform: scale(1.4);
  }
`;

const coloredLogo = (color: string): FlattenInterpolation<ThemedStyledProps<any, any>> => css`
  g,
  path {
    fill: ${color};
  }
`;

const defaultLogoColor = css`
  g,
  path {
    fill: #fff;
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

export type BrandingLogoProps = {
  className?: string;
  brandingHolder: keyof typeof Brands;
  color?: string;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

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
  ${({ color }) => (color ? coloredLogo(color) : defaultLogoColor)}
`;

export default BrandingLogo;
