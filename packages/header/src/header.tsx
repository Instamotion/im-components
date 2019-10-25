import React from 'react';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import CallerImg from './items/caller-img';
import Link from './items/link';
import theme, { AvailableColors } from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';

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
          <Icon iconName={'bars'} size={16} color={textColor} />
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
          <Icon iconName={'search'} size={16} color={textColor} />
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
          <HelpWrapper>
            <FormattedMessage id="header.menu.help" />
          </HelpWrapper>
          <CallerImg imgPath={imgPath} />
          <Link
            text={<FormattedMessage id="header.menu.phone_number" />}
            color={textColor}
            colorHover={textColorHover}
            icon="phone"
            path="tel:089-411151-100"
          />
        </PhoneWrapper>
        <NavWrapper>
          <Link
            text={<FormattedMessage id="header.menu.search" />}
            color={textColor}
            colorHover={textColorHover}
            icon="search"
            path="/todo-suchen"
          />
          <Link
            text={<FormattedMessage id="header.menu.top_offers" />}
            color={textColor}
            colorHover={textColorHover}
            icon="trophy"
            path="/todo-top"
          />
          <Link
            text={<FormattedMessage id="header.menu.wish_list" />}
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
      <Background></Background>
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
  height: 3rem;
  ${theme.mediaQueries.whenDesktop} {
    height: 4rem;
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
  height: 2rem;
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
  flex-shring: 0;
  align-items: center;
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
`;

const HelpWrapper = styled.span`
  margin-left: 1.5rem;
  display: none;
  ${theme.mediaQueries.whenDesktopXL} {
    display: inline;
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

const Background = styled.div``;

export default Header;
