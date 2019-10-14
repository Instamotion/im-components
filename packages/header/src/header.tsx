import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

export interface HeaderProps {
  className?: string;
  onTheLeft?: React.ReactElement | string;
  onTheRight?: React.ReactElement | string;
  inTheMiddle?: React.ReactElement | string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({
  onTheLeft,
  onTheRight,
  inTheMiddle,
  className
}) => (
  <header className={className}>
    <div>{onTheLeft}</div>
    <div>{inTheMiddle}</div>
    <div>{onTheRight}</div>
  </header>
);

const Header = styled(HeaderComponent)`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  .phone {
    display: none;

    ${theme.mediaQueries.whenTablet} {
      display: inline-flex;
    }
  }
`;

export default Header;
