import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BrandLogo } from './BrandLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPhoneAlt } from '@fortawesome/pro-solid-svg-icons';
import { faHeart as faHeartOutlined } from '@fortawesome/pro-light-svg-icons';
import Link from './items/link';
import Burger from './items/burger';
import MobileMenu from './items/mobileMenu';
import { IMTheme as theme } from '@im-ui/theme';
import { FormattedMessage } from 'react-intl';
import { NewHeaderProps } from '../types';
import useModal from '../useModal';

export const Header: React.FC<NewHeaderProps> = props => {
  const [isBurgerOpen, toggleBurger] = useModal();
  const [count, setCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = props.phoneNumber || '089 2109 4444';
  const { utmQuery } = props;

  useEffect(() => {
    if (props.light) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 70) {
      !isScrolled && setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
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

  const addUtm = (url: string): string => (utmQuery ? url + utmQuery : url);

  return (
    <HeaderWrapper isScrolled={!isScrolled && props.light && !isBurgerOpen}>
      <HeaderBar>
        <Burger clickedCb={toggleBurger} isOpen={isBurgerOpen} />
        <Link
          className={count ? 'favoritesmobile' : 'heartoutline'}
          text={
            <FormattedMessageWrapper>
              <Icon
                color={count ? theme.color.secondary : theme.color.white}
                icon={count ? faHeart : faHeartOutlined}
              />
              {!!count && <FavoritesCount>{count}</FavoritesCount>}
            </FormattedMessageWrapper>
          }
          path={addUtm('/favoriten')}
        />
        <LogoWrapper>
          <BrandLogo
            color={theme.color.secondary}
            colorTwo={theme.color.white}
            brandingHolder="Instamotion"
            link={addUtm('/')}
          />
        </LogoWrapper>
        <NavWrapper isScrolled={!isScrolled && props.light}>
          <Link
            text={
              <FormattedMessageWrapper>
                <FormattedMessage id="header.menu.alle.autos" />
              </FormattedMessageWrapper>
            }
            path={addUtm('/autos')}
          />
          <Link
            text={
              <FormattedMessageWrapper>
                <FormattedMessage id="header.menu.top_offers" />
              </FormattedMessageWrapper>
            }
            path={addUtm('/angebote')}
          />
          <Link
            text={
              <FormattedMessageWrapper>
                <FormattedMessage id="header.menu.how_it_works" />
              </FormattedMessageWrapper>
            }
            path={addUtm('/deine-vorteile/so-funktionierts')}
          />
          <Link
            className={`${count ? 'favorites' : ''}`}
            linkColor={count ? theme.color.primary : theme.color.white}
            text={
              <FormattedMessageWrapper>
                <Icon color={count ? theme.color.secondary : theme.color.white} icon={faHeart} />
                <FavoritesCount>
                  {!!count && (
                    <span>
                      {count} <FormattedMessage id="header.menu.favorites" />
                    </span>
                  )}
                  {!count && (
                    <span>
                      <FormattedMessage id="header.menu.favorites" />
                    </span>
                  )}
                </FavoritesCount>
              </FormattedMessageWrapper>
            }
            path={addUtm('/favoriten')}
          />
          <PhoneWrapper>
            <Link
              text={
                <FormattedMessageWrapper>
                  <Icon icon={faPhoneAlt} color={theme.color.white} />
                  {phoneNumber}
                </FormattedMessageWrapper>
              }
              track="callFromHeader"
              path={`tel:${phoneNumber}`}
            />
          </PhoneWrapper>
        </NavWrapper>
      </HeaderBar>
      <MobileMenu
        isOpen={isBurgerOpen}
        toggleBurger={toggleBurger}
        phoneNumber={phoneNumber}
        favoritesCount={count}
        utmQuery={utmQuery}
      />
    </HeaderWrapper>
  );
};

interface ScrolledProp {
  isScrolled?: boolean;
}

export const HeaderWrapper = styled.header<ScrolledProp>`
  background: linear-gradient(95.66deg, #054256 5.21%, #6dc4cd 67.29%);
  color: ${theme.color.white};
  display: flex;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  line-height: 1.5;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.bentonMedium.family};
  font-weight: ${theme.font.bentonMedium.weight};
  height: 3.25rem;

  ${theme.mediaQueries.whenDesktop} {
    height: 5rem;
  }

  ${props =>
    props.isScrolled &&
    css`
      background: transparent;
      color: ${theme.color.primary};
      a {
        color: ${theme.color.primary};
      }
      svg {
        fill: ${theme.color.primary};
        color: ${theme.color.primary};
      }
      g {
        > path:nth-child(2) {
          fill: ${theme.color.primary};
          color: ${theme.color.primary};
        }
      }
    `}
`;

export const LogoWrapper = styled.div<ScrolledProp>`
  display: block;
  ${BrandLogo} div {
    width: 7.6rem;
    height: 2.1rem;
  }
  ${theme.mediaQueries.whenDesktop} {
    ${BrandLogo} div {
      width: 10rem;
      height: 2.75rem;
    }
  }
  ${props =>
    props.isScrolled &&
    css`
      fill: ${theme.color.primary};
      color: ${theme.color.primary};
    `}
`;

const PhoneWrapper = styled.div<ScrolledProp>`
  flex-shrink: 0;
  align-items: center;
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: flex;
    height: 100%;
  }

  ${Link} a {
    margin-right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    ${props =>
      props.isScrolled &&
      css`
        color: ${theme.color.primary};
      `}
  }
`;

const NavWrapper = styled.div<ScrolledProp>`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    height: 2.3rem;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
  ${Link} {
    margin-right: 2.5rem;
    display: flex;
    justify-content: center;
    height: 100%;
    a {
      text-transform: none;
      margin-right: 0;
      :hover {
        svg {
          fill: ${theme.color.primary};
          color: ${theme.color.primary};
        }
      }

      ${theme.mediaQueries.whenTablet} {
        ${props =>
          props.isScrolled &&
          css`
            color: ${theme.color.primary};
            :hover {
              color: ${theme.color.white};

              svg {
                fill: ${theme.color.white};
                color: ${theme.color.white};
              }
            }
          `}
      }
    }
  }
  ${Link}:last-child > a {
    margin-right: 0;
  }
  & .favorites {
    background: ${theme.color.white};
    border-radius: 3rem;
    padding: 0 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 2.5rem;

    a {
      margin-right: 0;
    }
    span {
      display: flex;
      align-items: center;
    }
    svg {
      padding-bottom: 3px;
      fill: ${theme.color.secondary};
      color: ${theme.color.secondary};
    }
    &:hover {
      a {
        color: ${theme.color.white};

        svg {
          fill: ${theme.color.secondary};
          color: ${theme.color.secondary};
        }
      }

      background: ${theme.color.primary};
    }
  }
`;

const HeaderBar = styled.div`
  display: flex;
  padding: 0 1rem;
  box-sizing: border-box;
  flex-direction: row-reverse;
  ${theme.mediaQueries.whenDesktop} {
    max-width: 80rem;
    margin: auto;
    flex-direction: row;
    padding: 0 4.5rem;
  }
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  & .heartoutline {
    position: absolute;
    right: 2rem;
    top: 1rem;
    ${theme.mediaQueries.whenDesktop} {
      display: none;
    }
  }
  & .favoritesmobile {
    position: absolute;
    right: 2.5rem;
    a {
      color: ${theme.color.primary};
      padding: 0.1rem 0.6rem;
      border: 1px solid ${theme.color.white};
      background: ${theme.color.white};
      border-radius: 3rem;
      display: inline-block;
    }
    span {
      display: flex;
      align-items: center;
    }
    ${theme.mediaQueries.whenDesktop} {
      display: none;
    }
  }
`;

const FormattedMessageWrapper = styled.span`
  cursor: pointer;
  text-transform: capitalize;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  }
`;

const FavoritesCount = styled.span`
  font-size: 0.875rem;
  ${theme.mediaQueries.whenDesktop} {
    font-size: 0.77rem;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export default Header;
