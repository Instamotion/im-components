import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  isVisible: boolean;
}

export const MenuIconComponent: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const visibleCss = `
  transform: rotate(-180deg);
  opacity: 1;
  visibility: visible;
`;

const MenuIconWrapper = styled(MenuIconComponent)`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s ease, opacity 0.2s ease, transform 0.3s ease,
    -webkit-transform 0.3s ease;
  ${props => (props.isVisible ? visibleCss : null)}
`;

export default MenuIconWrapper;
