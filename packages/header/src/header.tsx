import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import Link from './items/link';
import Burger from './items/burger';
import MobileMenu, { Favorites } from './items/mobileMenu';
import theme, { AvailableColors } from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';
import { HeaderProps } from './types';
import useModal from './useModal';

export const Header: React.FC<HeaderProps> = ({ menuOptions = {}, favoritesCount }) => {
  const phoneNumber = '089 2109 4444';
  const [isBurgerOpen, toggleBurger] = useModal();
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [count, setCount] = useState(0);

  const countFromLocalStorage = () => {
    if (typeof favoritesCount === 'number') return;
    const val = localStorage.getItem('im-favoriteProducts');
    setCount(val ? JSON.parse(val).length : 0);
  };

  useEffect(() => {
    countFromLocalStorage();
    document.addEventListener('favoritesCountChanged', countFromLocalStorage);
  }, []);

  useEffect(() => {
    if (typeof favoritesCount !== 'number') return;
    setCount(favoritesCount);
  }, [favoritesCount]);

  return (
    <HeaderWrapper>
      <SubMenuOverlay visible={isSubMenuOpen}></SubMenuOverlay>
      <HeaderBar>
        <Burger clickedCb={toggleBurger} isOpen={isBurgerOpen} favoritesCount={count}></Burger>
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
            <Icon icon="cars" color="white" />
          </a>
        </SearchWrapper>
        <SpacerBefore></SpacerBefore>
        <NavWrapper>
          <Link text={<FormattedMessage id="header.menu.autos" />} path="/autos" />
          <Link text={<FormattedMessage id="header.menu.top_offers" />} path="/angebote" />
          <Link
            text={<FormattedMessage id="header.menu.wish_list" />}
            path="/favoriten"
            extra={count ? <Favorites>{count}</Favorites> : undefined}
          />
          <Link
            text={<FormattedMessage id="header.menu.how_it_works" />}
            path="/so-funktionierts"
          />
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
        <SpacerAfter></SpacerAfter>
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
        toggleBurger={toggleBurger}
        phoneNumber={phoneNumber}
        isSubMenuOpen={isSubMenuOpen}
        menuOptions={menuOptions}
        favoritesCount={count}
        toggleMenu={() => {
          setSubMenuOpen(!isSubMenuOpen);
        }}
      ></MobileMenu>
    </HeaderWrapper>
  );
};

const SpacerBefore = styled.div`
  flex-grow: 0.3;
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: flex;
  }
`;

const SpacerAfter = styled.div`
  flex-grow: 0.7;
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: flex;
  }
`;

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
  line-height: 1.5;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.sans.family};
  height: 3em;
  ${theme.mediaQueries.whenDesktop} {
    height: 4em;
  }
`;

export const LogoWrapper = styled.div`
  display: block;
  ${BrandingLogo} div {
    width: 7.6em;
    height: 2.1em;
  }
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
    ${BrandingLogo} div {
      width: 10em;
      height: 2.75em;
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
  width: 2em;
  height: 2em;
  min-width: 2em;
  background-image: url('https://cdn.instamotion.com/images/header-img.png');
  object-fit: contain;
  border-radius: 1em;
  background-position: center;
  margin: 0 1em 0 0;
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
  ${Link}:last-child > a {
    margin-right: 0;
  }
`;

const SubMenuOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  height: 3em;
  width: 100%;
  top: 4em;
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
  padding: 0 1em;
  ${theme.mediaQueries.whenDesktop} {
    padding: 0 1.5em;
  }
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
