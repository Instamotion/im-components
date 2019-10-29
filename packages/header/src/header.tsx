import React from 'react';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import CallerImg from './items/caller-img';
import Link from './items/link';
import Burger from './items/burger';
import MobileMenu from './items/mobile-menu';
import theme, { AvailableColors } from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';

export interface HeaderWrapperProps {
  variant: 'transparent' | 'dark';
  imgPath: string;
  className?: string;
}

export interface HeaderProps extends HeaderWrapperProps {
  burgerClicked(): void;
  isOpen: boolean;
}

export const HeaderComponent: React.FC<HeaderProps> = ({
  variant,
  className,
  imgPath,
  burgerClicked,
  isOpen
}) => {
  const brandColor = variant === 'dark' ? AvailableColors.white : AvailableColors.oil;
  const brandColorTwo = variant === 'dark' ? AvailableColors.downy : AvailableColors.oil;
  const allianzColor = variant === 'dark' ? '#138' : AvailableColors.oil;
  const textColor: keyof typeof AvailableColors = variant === 'dark' ? 'white' : 'oil';
  const textColorHover: keyof typeof AvailableColors = variant === 'dark' ? 'silver' : 'brightGrey';

  return (
    <header className={className}>
      <HeaderBar>
        <Burger clickedCb={() => burgerClicked()} isOpen={isOpen} textColor={textColor}></Burger>
        <LogoWrapper>
          <BrandingLogo
            color={brandColor}
            colorTwo={brandColorTwo}
            brandingHolder="InstamotionAllianz"
            link="/"
          />
        </LogoWrapper>
        <SearchWrapper>
          <a href="/autos">
            <Icon iconName={'search'} size={16} color={textColor} />
          </a>
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
            path="/autos"
          />
          <Link
            text={<FormattedMessage id="header.menu.top_offers" />}
            color={textColor}
            colorHover={textColorHover}
            icon="trophy"
            path="/top-offers"
          />
          <Link
            text={<FormattedMessage id="header.menu.wish_list" />}
            color={textColor}
            colorHover={textColorHover}
            icon="star"
            path="/wish-list"
          />
        </NavWrapper>
      </HeaderBar>
      <AllianzBar>
        <BrandingLogo color={allianzColor} brandingHolder="Allianz" link="/" />
      </AllianzBar>
      <MobileMenu isOpen={isOpen}></MobileMenu>
    </header>
  );
};

const Header = styled(HeaderComponent)`
  background: ${props => (props.variant === 'transparent' ? 'transparent' : theme.color.oil)};
  transition: all 0.3s ease;
  color: ${props => (props.variant === 'transparent' ? 'black' : 'white')};
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.sans.family};
  height: 3rem;
  ${theme.mediaQueries.whenDesktop} {
    height: 4rem;
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
  cursor: pointer;
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
  background-color: ${theme.color.white};
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

export const HeaderWrapper: React.FC<HeaderWrapperProps> = props => {
  const [isOpen, setIsOpen] = React.useState(false);

  const clicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Header
      {...props}
      burgerClicked={clicked}
      variant={isOpen ? 'dark' : props.variant}
      isOpen={isOpen}
    ></Header>
  );
};

export default Header;
