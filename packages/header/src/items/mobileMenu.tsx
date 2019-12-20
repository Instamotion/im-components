import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import Link, { ChildrenItems } from './link';
import { FormattedMessage } from 'react-intl';
import { MenuOptions } from '../types';

interface Props {
  className?: string;
  isOpen: boolean;
  phoneNumber: string;
  menuOptions: MenuOptions;
  showChildren?: boolean;
  isSubMenuOpen?: boolean;
  toggleMenu: () => void;
}

export const MobileMenu: React.FC<Props> = ({
  className,
  phoneNumber,
  isSubMenuOpen,
  toggleMenu,
  menuOptions
}) => {
  return (
    <div className={className}>
      <MobileItems>
        <Link text={<FormattedMessage id="header.menu.autos" />} path="/autos" />
        <Link text={<FormattedMessage id="header.menu.top_offers" />} path="/angebote" />
        <Link text={<FormattedMessage id="header.menu.wish_list" />} path="/favoriten" />
        <Link text={<FormattedMessage id="header.menu.how_it_works" />} path="/sofunktionierts" />
        <Link
          text={<FormattedMessage id="header.menu.services" />}
          onClick={() => {
            toggleMenu();
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
        <Link
          className="phoneLink"
          text={phoneNumber}
          icon={'phone'}
          track="callFromHeader"
          path={`tel:${phoneNumber}`}
        />
      </MobileItems>
    </div>
  );
};

const MobileItems = styled.div`
  flex-direction: column;
  position: fixed;
  top: 3rem;
  bottom: 0;
  left: 0;
  width: 75%;
  height: 100%;
  box-sizing: border-box;
  opacity: 1;
  /* max-width: 27rem; */
  padding: 1.5rem;
  background-color: ${theme.color.oil};
  text-align: left;
  ${Link} {
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
  }
  ${Link} .phoneLink {
    margin-top: 2rem;
  }
  ${ChildrenItems} ${Link} {
    margin-bottom: 0;
  }
`;

const MobileMenuComponent = styled(MobileMenu)`
  display: block;
  position: fixed;
  box-sizing: border-box;
  top: 3rem;
  bottom: 0;
  left: ${props => (props.isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
  ${props => (props.isOpen ? 'opacity: 1;' : 'opacity: 0;')};
  ${MobileItems} {
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

export default MobileMenuComponent;
