import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import Link from './link';
import { FormattedMessage } from 'react-intl';

interface Props {
  className?: string;
  isOpen: boolean;
}

export const MobileMenu: React.FC<Props> = ({ className, isOpen }) => {
  return (
    <div className={className}>
      <MobileItems>
        <Link
          text={<FormattedMessage id="header.menu.phone_number" />}
          color={'white'}
          colorHover={'downy'}
          icon="phone"
          path="tel:089-411151-100"
        />
        <Link
          text={<FormattedMessage id="header.menu.top_offers" />}
          color={'white'}
          colorHover={'downy'}
          icon="trophy"
          path="/top-offers"
        />
        <Link
          text={<FormattedMessage id="header.menu.wish_list" />}
          color={'white'}
          colorHover={'downy'}
          icon="star"
          path="/wish-list"
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
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  opacity: 1;
  max-width: 425px;
  padding-left: 1.5rem;
  background-color: ${theme.color.oil};
  text-align: left;
  ${Link} {
    padding: 0.625rem 0;
  }
  ${Link}:first-child {
    padding-top: 1.25rem;
  }
`;

const MobileMenuComponent = styled(MobileMenu)`
  display: block;
  position: fixed;
  box-sizing: border-box;
  top: 3rem;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.oil};
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