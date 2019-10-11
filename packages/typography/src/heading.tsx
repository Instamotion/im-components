import * as React from 'react';
import styled, { css } from 'styled-components';

export interface HeadingProps {
    className?: string;
    children?: JSX.Element | string;
  size: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
  inline?: boolean;
}

export const HeadingComponent: React.FC<HeadingProps> = ({ size, className, children }) => {
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

const Heading = styled(HeadingComponent)`
  ${({ theme, size, inline }) => css`
    font-size: ${theme.heading[size].size}px;
    font-weight: normal;
    ${inline &&
      css`
        display: inline-block;
      `}
  `}
`;

export default Heading;
