import React from 'react';
import styled from 'styled-components';
import { theme } from '@themes/themesV4/default';

interface Props {
  children?: JSX.Element | string;
}

const MenuItemHeader = styled.div`
  padding-bottom: 1rem;
  color: ${theme.color.oil};
  width: 8.3125rem;
  height: 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.625rem;
  text-transform: uppercase;
`;

const MenuItemHeaderComponent: React.FC<Props> = ({ children }) => (
  <MenuItemHeader>{children}</MenuItemHeader>
);

export default MenuItemHeaderComponent;
