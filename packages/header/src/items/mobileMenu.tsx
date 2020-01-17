import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import Link, { ChildrenItems } from './link';
import { FormattedMessage } from 'react-intl';
import { MenuOptions } from '../types';

interface Props {
  className?: string;
  isOpen: boolean;
  toggleBurger: () => void;
  phoneNumber: string;
  menuOptions: MenuOptions;
  favoritesCount?: number;
  showChildren?: boolean;
  isSubMenuOpen?: boolean;
  toggleMenu: () => void;
}

export const MobileMenu: React.FC<Props> = ({
  className,
  toggleBurger,
  phoneNumber,
  isSubMenuOpen,
  toggleMenu,
  favoritesCount,
  menuOptions
}) => {
  return (
    <div className={className}>
      <Overlay onClick={toggleBurger}></Overlay>
      <MobileItems>
        <Link text={<FormattedMessage id="header.menu.autos" />} path="/autos" />
        <Link text={<FormattedMessage id="header.menu.top_offers" />} path="/angebote" />
        <Link
          text={<FormattedMessage id="header.menu.wish_list" />}
          path="/favoriten"
          extra={favoritesCount ? <Favorites>({favoritesCount})</Favorites> : undefined}
        />
        <Link text={<FormattedMessage id="header.menu.how_it_works" />} path="/so-funktionierts" />
        <Link
          text={<FormattedMessage id="header.menu.services" />}
          onClick={toggleMenu}
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
        <Link
          className="phonelink"
          text={phoneNumber}
          icon={'phone'}
          track="callFromHeader"
          path={`tel:${phoneNumber}`}
        />
      </MobileItems>
    </div>
  );
};

export const Favorites = styled.span`
  color: ${theme.color.downy};
  padding-left: 0.5em;
  ${theme.mediaQueries.whenDesktop} {
    position: absolute;
    padding-left: 0;
    font-size: 0.75em;
    bottom: 1.35em;
    right: 1.5em;
  }
  ${theme.mediaQueries.whenDesktopXL} {
    right: 2em;
  }
`;

const Overlay = styled.div`
  display: block;
  position: fixed;
  box-sizing: border-box;
  top: 3em;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.oil};
  transition: visibility 0.2s ease-in-out, opacity 0.5s ease-in-out;
`;

const MobileItems = styled.div`
  flex-direction: column;
  position: fixed;
  top: 3em;
  bottom: 0;
  left: 0;
  width: 75%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  max-width: 22em;
  padding: 1em 1.5em;
  background-color: ${theme.color.oil};
  text-align: left;
  ${Link} {
    padding: 0.25em 0;
    margin-bottom: 0.5em;
    a:hover:not([href]) {
      -webkit-tap-highlight-color: transparent;
      color: ${theme.color.white};
    }
  }
  & > .phonelink {
    margin-top: 5em;
    a {
      text-decoration: underline;
      color: ${theme.color.downy};
    }
  }
  ${ChildrenItems} ${Link} {
    margin-bottom: 0;
  }
`;

const MobileMenuComponent = styled(MobileMenu)`
  ${Overlay} {
    ${props => (props.isOpen ? 'opacity: 0.5;' : 'opacity: 0;')};
    left: ${props => (props.isOpen ? '0' : '-100%')};
  }
  ${MobileItems} {
    transition: transform 0.3s ease;
    overflow-y: ${props => (props.isOpen ? 'scroll' : 'hidden')};
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

export default MobileMenuComponent;
