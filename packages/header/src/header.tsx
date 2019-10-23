import React from 'react';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import CallerImg from './items/caller-img';
import Link from './items/link';
import theme, { AvailableColors } from '@im-ui/theme';
import Icon from '@im-ui/icon';

export interface HeaderProps {
  variant: 'transparent' | 'dark';
  imgPath: string;
  className?: string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ variant, className, imgPath }) => {
  const brandColor = variant === 'transparent' ? AvailableColors.oil : AvailableColors.white;
  const brandColorTwo = variant === 'transparent' ? AvailableColors.oil : AvailableColors.downy;
  const allianzColor = variant === 'transparent' ? AvailableColors.oil : '#138';
  const textColor: keyof typeof AvailableColors = variant === 'transparent' ? 'oil' : 'white';
  const textColorHover: keyof typeof AvailableColors =
    variant === 'transparent' ? 'brightGrey' : 'silver';

  return (
    <header className={className}>
      <HeaderBar>
        <BurgerWrapper>
          <Icon iconName={'bars'} size={18} color={textColor} />
        </BurgerWrapper>
        <LogoWrapper>
          <BrandingLogo
            color={brandColor}
            colorTwo={brandColorTwo}
            brandingHolder="InstamotionAllianz"
            link="/"
          />
        </LogoWrapper>
        <SearchWrapper>
          <Icon iconName={'search'} size={18} color={textColor} />
        </SearchWrapper>
        <LogoDesktopWrapper>
          <BrandingLogo
            color={brandColor}
            colorTwo={brandColorTwo}
            brandingHolder="Instamotion"
            link="/"
          />
        </LogoDesktopWrapper>
        <PhoneWrapper>
          <span>Wir helfen Dir weiter!</span>
          <CallerImg imgPath={imgPath} />
          <Link
            text="089 411151-100"
            color={textColor}
            colorHover={textColorHover}
            icon="phone"
            path="tel:089-411151-100"
          />
        </PhoneWrapper>
        <NavWrapper>
          <Link
            text="Suchen"
            color={textColor}
            colorHover={textColorHover}
            icon="search"
            path="/todo-suchen"
          />
          <Link
            text="Topangebote"
            color={textColor}
            colorHover={textColorHover}
            icon="trophy"
            path="/todo-top"
          />
          <Link
            text="Merkzettel"
            color={textColor}
            colorHover={textColorHover}
            icon="star"
            path="todo-merk"
          />
        </NavWrapper>
      </HeaderBar>
      <AllianzBar>
        <BrandingLogo color={allianzColor} brandingHolder="Allianz" link="/" />
      </AllianzBar>
    </header>
  );
};

const Header = styled(HeaderComponent)`
  background: ${props => (props.variant === 'transparent' ? 'transparent' : AvailableColors.oil)};
  transition: all 0.3s ease;
  color: ${props => (props.variant === 'transparent' ? 'black' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.sans.family};
  height: 48px;
  ${theme.mediaQueries.whenDesktop} {
    height: 64px;
  }
`;

const BurgerWrapper = styled.div`
  display: block;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: block;
  width: 96px;
  height: 34px;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  display: block;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const LogoDesktopWrapper = styled.div`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
`;

const PhoneWrapper = styled.div`
  flex: 0.6;
  align-items: center;
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
  ${CallerImg} {
    margin: 0 1rem;
  }
`;

const NavWrapper = styled.div`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
  ${Link}:last-child {
    margin-right: 0;
  }
`;

const AllianzBar = styled.div`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  transition: background-color 0.3s ease;
  background-color: #fff;
  height: 100%;
`;

const HeaderBar = styled.div`
  display: flex;
  padding: 0 1rem;
  ${theme.mediaQueries.whenDesktop} {
    padding: 0 1.5rem;
  }
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
