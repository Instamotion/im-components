import React from 'react';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import Link from './items/link';
import Burger from './items/burger';
import MobileMenu from './items/mobileMenu';
import theme, { AvailableColors } from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ phoneNumber, menuOptions = {} }) => {
  const [isBurgerOpen, setBurgerOpen] = React.useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = React.useState(false);

  return (
    <HeaderWrapper>
      <SubMenuOverlay visible={isSubMenuOpen}></SubMenuOverlay>
      <HeaderBar>
        <Burger clickedCb={() => setBurgerOpen(!isBurgerOpen)} isOpen={isBurgerOpen}></Burger>
        <LogoWrapper>
          <BrandingLogo
            color={AvailableColors.white}
            colorTwo={AvailableColors.downy}
            brandingHolder="InstamotionAllianz"
            link="/"
          />
        </LogoWrapper>
        <SearchWrapper>
          <a href="/autos">
            <Icon iconName={'cars'} size={20} color={'white'} />
          </a>
        </SearchWrapper>
        <NavWrapper>
          <Link text={<FormattedMessage id="header.menu.autos" />} path="/autos" />
          <Link text={<FormattedMessage id="header.menu.top_offers" />} path="/angebote" />
          <Link text={<FormattedMessage id="header.menu.wish_list" />} path="/favoriten" />
          <Link text={<FormattedMessage id="header.menu.how_it_works" />} path="/sofunktionierts" />
          <Link
            text={<FormattedMessage id="header.menu.services" />}
            onClick={() => {
              setSubMenuOpen(!isSubMenuOpen);
            }}
            showChildren={isSubMenuOpen}
          >
            {menuOptions.showFinancingLink && (
              <Link text={<FormattedMessage id="header.menu.financing" />} path="/finanzierung" />
            )}
            {menuOptions.showDeliveryLink && (
              <Link text={<FormattedMessage id="header.menu.delivery" />} path="/lieferung" />
            )}
            <Link text={<FormattedMessage id="header.menu.warranty" />} path="/garantie" />
            {menuOptions.showQualityLink && (
              <Link text={<FormattedMessage id="header.menu.quality" />} path="/qualitaet" />
            )}
          </Link>
        </NavWrapper>
        <PhoneWrapper>
          <CallerImg />
          <Link
            text={phoneNumber}
            track="callFromHeader"
            icon="phone"
            path={`tel:${phoneNumber}`}
          />
        </PhoneWrapper>
      </HeaderBar>
      <MobileMenu
        isOpen={isBurgerOpen}
        phoneNumber={phoneNumber}
        isSubMenuOpen={isSubMenuOpen}
        menuOptions={menuOptions}
        toggleMenu={() => {
          setSubMenuOpen(!isSubMenuOpen);
        }}
      ></MobileMenu>
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.header`
  background: ${theme.color.oil};
  color: ${theme.color.white};
  transition: all 0.3s ease;
  display: flex;
  position: fixed;
  z-index: 10;
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

export const LogoWrapper = styled.div`
  display: block;
  ${BrandingLogo} div {
    width: 7.6rem;
    height: 2.1rem;
  }
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
    ${BrandingLogo} div {
      width: 10rem;
      height: 2.75rem;
    }
  }
`;

const SearchWrapper = styled.div`
  cursor: pointer;
  display: block;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const PhoneWrapper = styled.div`
  flex-shrink: 0;
  align-items: center;
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
  ${Link} a {
    margin-right: 0;
  }
`;

const CallerImg = styled.div`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  background-image: url('https://cdn.instamotion.com/images/header-img.png');
  object-fit: contain;
  border-radius: 1rem;
  background-position: center;
  margin: 0 1rem;
  display: none;
  ${theme.mediaQueries.whenDesktopXL} {
    display: block;
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

const SubMenuOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  height: 3rem;
  width: 100%;
  top: 4rem;
  background-color: ${theme.color.oil};
  transition: all 0.3s ease;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '0.8' : '0')};
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: block;
  }
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
