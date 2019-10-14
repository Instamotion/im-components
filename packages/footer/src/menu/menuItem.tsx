import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

interface Props {
  children?: (JSX.Element | null)[];
}

const MenuItem = styled.div`
  :nth-child(1) {
    grid-area: menu1;
  }
  :nth-child(2) {
    grid-area: menu2;
  }
  :nth-child(3) {
    grid-area: menu3;
  }
  :nth-child(4) {
    grid-area: menu4;
  }
  :nth-child(5) {
    grid-area: menu5;
  }
  :nth-child(6) {
    grid-area: menu6;
    ${theme.mediaQueries.whenTablet} {
      margin-top: 1rem;
    }
    ${theme.mediaQueries.whenDesktop} {
      margin-top: -2.3rem;
    }
  }
  margin-bottom: 1rem;
`;

const MenuItemComponent: React.FC<Props> = ({ children }) => <MenuItem>{children}</MenuItem>;

export default MenuItemComponent;
