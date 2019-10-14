import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@instamotion/theme';

export interface HeadingProps {
  className?: string;
  children?: JSX.Element | string;
  size: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
  inline?: boolean;
}

const HeadingComponent: React.FC<HeadingProps> = ({ size, className, children }) => {
  const levels = {
    xxl: 'h1',
    xl: 'h2',
    l: 'h3',
    m: 'h4',
    s: 'h5',
    xs: 'h6',
    xxs: 'h6'
  };
  const Tag = `${levels[size]}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <Tag className={className}>{children}</Tag>;
};

export const Heading = styled(HeadingComponent)`
  ${({ size, inline }) => css`
    font-size: ${theme.heading[size].size}px;
    font-weight: normal;
    ${inline &&
      css`
        display: inline-block;
      `}
  `}
`;
