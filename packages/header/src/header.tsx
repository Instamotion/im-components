import React from 'react';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import CallerImg from './assets/caller-img';
import Link from './items/link';
import theme, { AvailableColors } from '@im-ui/theme';

export interface HeaderProps {
  variant: 'transparent' | 'black';
  className?: string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ variant, className }) => {
  const brandColor = variant === 'transparent' ? 'black' : 'white';
  return (
    <header className={className}>
      <BrandingLogo color={brandColor} brandingHolder="Instamotion" link="/" />
      <CallerImg />
      <Link text="089 411151-100" icon="phone" path="/todo-suchen" />
      <Link text="Suchen" icon="search" path="/todo-suchen" />
      <Link text="Topangebote" icon="trophy" path="/todo-top" />
      <Link text="Merkzettel" icon="star" path="todo-merk" />
      <BrandingLogo color={brandColor} brandingHolder="Allianz" link="/" />
    </header>
  );
};
//  background: ${props => props.variant === HeaderVarian.webBlack ? 'black' : 'white'};
//  background: #000;
const Header = styled(HeaderComponent)`
  background: ${props => (props.variant === 'transparent' ? 'transparent' : AvailableColors.oil)};
  color: ${props => (props.variant === 'transparent' ? 'black' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-family: ${theme.font.sans.family};

  .phone {
    display: none;
    ${theme.mediaQueries.whenTablet} {
      display: inline-flex;
    }
  }
`;

export default Header;
