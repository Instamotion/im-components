import styled from 'styled-components';
import React from 'react';
import theme from '@instamotion/theme';

interface NavDotProps {
  className?: string;
  children?: JSX.Element | string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavDotComponent: React.FC<NavDotProps> = ({ className, children, onClick }) => (
  <button className={className} onClick={onClick} type="button">
    {children}
  </button>
);

const NavDot = styled(NavDotComponent)`
  border: 1px solid #c8c8c8;
  border-radius: 50%;
  background: transparent;
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin-right: 5px;
  padding: 0;

  &:last-of-type {
    margin-right: 0;
  }

  &.active {
    background-color: ${theme.color.downy};
  }
`;

export default NavDot;
