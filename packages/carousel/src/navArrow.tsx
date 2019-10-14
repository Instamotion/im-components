import React from 'react';
import styled from 'styled-components';

interface NavArrowProps {
  className?: string;
  children?: JSX.Element | string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const NavArrowComponent: React.FC<NavArrowProps> = ({ className, children, onClick, disabled }) => (
  <button className={className} onClick={onClick} type="button" disabled={disabled}>
    {children}
  </button>
);

const NavArrow = styled(NavArrowComponent)`
  color: #9b9b9b;
  font-size: 32px;
  border: none;
  background: transparent;
  opacity: 0.3;
  cursor: pointer;

  &[disabled] {
    color: rgba(155, 155, 155, 0.3);
  }
`;

export default NavArrow;
