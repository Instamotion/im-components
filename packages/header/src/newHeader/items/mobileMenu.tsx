import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/pro-light-svg-icons';
import theme from '@im-ui/theme';
import Link, { ChildrenItems } from './link';
import { FormattedMessage } from 'react-intl';

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
  utmQuery
}) => {
  const addUtm = (url: string): string => (utmQuery ? url + utmQuery : url);
  return (
    <div className={className}>
      <Overlay onClick={toggleBurger}></Overlay>
      <MobileItems>
        <Link
          text={<FormattedMessage id="header.menu.alle.autos" />}
          path={addUtm('/autos')}
          linkColor={theme.color.oil}
        />
        <Link
          text={<FormattedMessage id="header.menu.top_offers" />}
          path={addUtm('/angebote')}
          linkColor={theme.color.oil}
        />
        <Link
          text={<FormattedMessage id="header.menu.favorites" />}
          path={addUtm('/favoriten')}
          linkColor={theme.color.oil}
          extra={favoritesCount ? <Favorites>({favoritesCount})</Favorites> : undefined}
        />
        <Link
          text={<FormattedMessage id="header.menu.how_it_works" />}
          path={addUtm('/deine-vorteile/so-funktionierts')}
          linkColor={theme.color.oil}
        />
        <Link
          text={<FormattedMessage id="header.menu.faq" />}
          path={addUtm('/ueber/faq')}
          linkColor={theme.color.oil}
        />
        <PhoneWrapper>
          <Icon icon={faPhone} color="#000" />
          <Link
            className="phonelink"
            text={phoneNumber}
            track="callFromHeader"
            path={`tel:${phoneNumber}`}
            linkColor={theme.color.oil}
          />
        </PhoneWrapper>
        <PhoneWrapper>
          <Icon icon={faEnvelope} color="#000" />
          <Link
            className="emaillink"
            text="info@instamotion.com"
            track="callFromHeader"
            path={`mailto:info@instamotion.com`}
            linkColor={theme.color.oil}
          />
        </PhoneWrapper>
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
  font-weight: 400;
  position: fixed;
  top: 3rem;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  background-color: ${theme.color.white};
  text-align: left;
  ${Link} {
    padding: 1.25rem 0;
    border-bottom: 1px solid #e5e5e5;
    a:hover:not([href]) {
      -webkit-tap-highlight-color: transparent;
      color: ${theme.color.white};
    }
  }
  & .phonelink,
  & .emaillink {
    border-bottom: 0;
    padding: 0.5rem 0;
    a {
      font-size: 0.875rem;
      text-transform: lowercase;
    }
  }
  & .phonelink {
    margin-top: 0.75rem;
  }
  ${ChildrenItems} ${Link} {
    margin-bottom: 0;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  padding: 0.5rem 0;
`;

const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MobileMenuComponent = styled(MobileMenu)`
  ${Overlay} {
    ${props => (props.isOpen ? 'opacity: 0.5;' : 'opacity: 0;')};
    left: ${props => (props.isOpen ? '0' : '-100%')};
  }
  ${MobileItems} {
    transition: transform 0.3s ease;
    overflow-y: ${props => (props.isOpen ? 'scroll' : 'hidden')};
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  }
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

export default MobileMenuComponent;
