import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import { FormattedMessage } from 'react-intl';
import TagManager from 'react-gtm-module';
import Icon from '@im-ui/icon';

interface Props {
  className?: string;
  isOpen: boolean;
  toggleBurger: () => void;
  phoneNumber: string;
  favoritesCount?: number;
  utmQuery?: string;
}

export const MobileMenu: React.FC<Props> = ({
  className,
  toggleBurger,
  phoneNumber,
  favoritesCount,
  utmQuery,
  isOpen
}) => {
  const addUtm = (url: string): string => (utmQuery ? url + utmQuery : url);
  const callFromHeader = (): void => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'callFromHeader'
      }
    });
  };
  return (
    <MobileMenuWrapper className={className}>
      <MobileItems isOpen={isOpen}>
        <Link href={addUtm('/autos')}>
          <FormattedMessage id="header.menu.alle.autos" />
        </Link>
        <Link href={addUtm('/angebote')}>
          <FormattedMessage id="header.menu.top_offers" />
        </Link>
        <Link href={addUtm('/favoriten')}>
          <FormattedMessage id="header.menu.favorites" />
          {favoritesCount !== undefined && favoritesCount > 0 && (
            <Favorites>({favoritesCount})</Favorites>
          )}
        </Link>
        <Link href={addUtm('/deine-vorteile/so-funktionierts')}>
          <FormattedMessage id="header.menu.how_it_works" />
        </Link>
        <Link href={addUtm('/ueber/faq')}>
          <FormattedMessage id="header.menu.faq" />
        </Link>

        <MobileInfo>
          <Link onClick={callFromHeader} href={`tel:${phoneNumber}`}>
            <Icon icon={'newPhone'} color="#000" className="phone" />
            {phoneNumber}
          </Link>
          <Link onClick={callFromHeader} href={`mailto:info@instamotion.com`}>
            <Icon icon={'envelope'} color="#000" />
            info@instamotion.com
          </Link>
        </MobileInfo>
      </MobileItems>
    </MobileMenuWrapper>
  );
};

const MobileItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  position: fixed;
  top: 3.25rem;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 2rem;
  background-color: ${theme.color.white};
  text-align: left;

  transition: transform 0.3s ease;
  overflow-y: ${props => (props.isOpen ? 'scroll' : 'hidden')};
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

export const Favorites = styled.span`
  color: ${theme.color.downy};
  padding-left: 0.5em;
`;

const Link = styled.a`
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  font-size: 1.25rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid ${theme.color.whiteGrey};
  color: ${theme.color.typo};
  text-decoration: none;

  svg {
    margin-right: 0.875rem;
    stroke: ${theme.color.oil};
    fill: transparent;
    color: transparent;
  }
`;

const MobileInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${Link} {
    padding: 0;
    margin-top: 1.25rem;
    border: none;
    font-size: 0.875rem;
  }
`;

const MobileMenuWrapper = styled.div`
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;
