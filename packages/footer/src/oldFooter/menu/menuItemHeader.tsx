import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

interface Props {
  children?: JSX.Element | string;
}

const MenuItemHeader = styled.div`
  color: ${theme.color.niagara};
  width: 8.3125rem;
  height: 1.5rem;
  opacity: 0.87;
  font-size: 0.875rem;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
`;

const MenuItemHeaderComponent: React.FC<Props> = ({ children }) => (
  <MenuItemHeader>{children}</MenuItemHeader>
);

export default MenuItemHeaderComponent;
