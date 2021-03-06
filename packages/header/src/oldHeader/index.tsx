import React, { useEffect, useState } from 'react';
import Icon from '@im-ui/icon';
import Burger from './items/burger';
import MobileMenu, { Favorites } from './items/mobileMenu';
import useModal from '../useModal';
import { FormattedMessage } from 'react-intl';
import theme, { AvailableColors } from '@im-ui/theme';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import Link from './items/link';
import { DefaultHeaderProps } from '../types';

export const Header: React.FC<DefaultHeaderProps> = props => {
  const [isBurgerOpen, toggleBurger] = useModal();
  const [count, setCount] = useState(0);
  const phoneNumber = props.phoneNumber || '089 2109 4444';

  const countFromLocalStorage = () => {
    if (typeof props.favoritesCount === 'number') return;
    const val = localStorage.getItem('im-favoriteProducts');
    setCount(val ? JSON.parse(val).length : 0);
  };

  useEffect(() => {
    countFromLocalStorage();
    document.addEventListener('favoritesCountChanged', countFromLocalStorage);
  }, []);

  useEffect(() => {
    if (typeof props.favoritesCount !== 'number') return;
    setCount(props.favoritesCount);
  }, [props.favoritesCount]);

  return (
    <HeaderWrapper>
      <HeaderBar>
        <Burger clickedCb={toggleBurger} isOpen={isBurgerOpen} favoritesCount={count} />
        <LogoWrapper>
          <BrandingLogo
            color={AvailableColors.white}
            colorTwo={AvailableColors.downy}
            brandingHolder="InstamotionAllianz"
            link={props.logoUrl ? props.logoUrl : '/'}
          />
        </LogoWrapper>
        <SearchWrapper>
          <a href="/autos">
            <Icon icon="cars" color="white" />
          </a>
        </SearchWrapper>
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
            path="/deine-vorteile/so-funktionierts"
          />
          <Link
            text={<FormattedMessage id="header.menu.services" />}
            path="/deine-vorteile/deine-vorteile"
          />
          <Link
            text={<FormattedMessage id="header.menu.additional_services" />}
            path="/deine-vorteile/zusatzleistungen"
          />
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
        toggleBurger={toggleBurger}
        phoneNumber={phoneNumber}
        favoritesCount={count}
      />
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

const HeaderBar = styled.div`
  display: flex;
  padding: 0 1em;
  box-sizing: border-box;
  ${theme.mediaQueries.whenDesktop} {
    max-width: 80rem;
    margin: auto;
    padding: 0 1.5em;
  }
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
