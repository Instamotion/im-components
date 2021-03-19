import React, { useEffect, useState } from 'react';
import { DefaultHeaderProps } from '../helpers/types';
import { IMTheme as theme } from '@im-ui/theme';
import useModal from '../helpers/useModal';
import styled from 'styled-components';
import BrandLogo from '@im-ui/branding-logo';
import { FormattedMessage } from 'react-intl';
import Icon from '@im-ui/icon';
import Burger from './burger';
import { MobileMenu } from './MobileMenu';

const Header: React.FC<DefaultHeaderProps> = ({
  phoneNumber = '089 2109 4444',
  utmQuery,
  favoritesCount,
  light
}) => {
  const [isBurgerOpen, toggleBurger] = useModal();
  const [count, setCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (light) {
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

  const addUtm = (url: string): string => (utmQuery ? url + utmQuery : url);

  const isLight = !isScrolled && light && !isBurgerOpen;
  const linkMode = isLight ? 'light' : 'normal';

  return (
    <HeaderBar lighModeEnable={isLight}>
      <HeaderContentWrapper>
        <LogoWrapper lighModeEnable={isLight}>
          <BrandLogo
            color={theme.color.secondary}
            colorTwo={theme.color.white}
            brandingHolder="Instamotion"
            link={addUtm('/')}
          />
        </LogoWrapper>
        <NavWrapper>
          <Link mode={linkMode} href={addUtm('/autos')}>
            <FormattedMessage id="header.menu.alle.autos" />
          </Link>
          <Link mode={linkMode} href={addUtm('/angebote')}>
            <FormattedMessage id="header.menu.top_offers" />
          </Link>
          <Link mode={linkMode} href={addUtm('/deine-vorteile/so-funktionierts')}>
            <FormattedMessage id="header.menu.how_it_works" />
          </Link>
          <Link mode={linkMode} href={addUtm('/favoriten')} isSelected={!!count}>
            <StyledIcon icon="newHeart" color={count ? theme.color.secondary : 'inherit'} />
            {!!count && count} <FormattedMessage id="header.menu.favorites" />
          </Link>
          <Link mode={linkMode} href={`tel:${phoneNumber}`}>
            <StyledIcon icon="newPhone" /> <span>{phoneNumber}</span>
          </Link>
        </NavWrapper>
        <MobileIcons isSelected={!!count}>
          <Link mode={linkMode} href={addUtm('/favoriten')} isSelected={!!count}>
            {count ? (
              <>
                <Icon icon="newHeart" color={theme.color.secondary} />
                <span>{count}</span>
              </>
            ) : (
              <Icon icon="newHeartEmpty" color={'transparent'} />
            )}
          </Link>
          <Burger clickedCb={toggleBurger} isOpen={isBurgerOpen} />
          <MobileMenu
            isOpen={isBurgerOpen}
            toggleBurger={toggleBurger}
            phoneNumber={phoneNumber}
            favoritesCount={count}
            utmQuery={utmQuery}
          />
        </MobileIcons>
      </HeaderContentWrapper>
    </HeaderBar>
  );
};

interface LightModeProp {
  lighModeEnable?: boolean;
}

export const HeaderBar = styled.header<LightModeProp>`
  display: flex;
  justify-content: center;
  background: linear-gradient(95.66deg, #054256 5.21%, #6dc4cd 67.29%);
  color: ${theme.color.white};
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  font-family: ${theme.font.bentonMedium.family};
  font-weight: ${theme.font.bentonMedium.weight};
  height: 3.25rem;
  padding: 0 1.25rem 0 1rem;

  ${theme.mediaQueries.whenDesktop} {
    padding: 0 4.5rem;
    height: 5rem;
  }

  ${props =>
    props.lighModeEnable &&
    `
      background: transparent;
    `}
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80rem;
  width: 100%;
  margin: auto;
`;

export const LogoWrapper = styled.div<LightModeProp>`
  display: block;
  svg,
  div {
    width: 8.75rem;
    height: 1.875rem;

    ${theme.mediaQueries.whenDesktop} {
      width: 12rem;
      height: 2.5rem;
    }
    ${props =>
      props.lighModeEnable &&
      `
      .cls-2 {
        fill: ${theme.color.primary};
        color: ${theme.color.primary};
      }
    `}
  }
`;

const linkColours: any = {
  light: {
    color: {
      select: theme.color.primary,
      notSelect: theme.color.primary
    },
    hoverColor: {
      select: theme.color.white,
      notSelect: theme.color.white
    }
  },
  normal: {
    color: {
      select: theme.color.primary,
      notSelect: theme.color.white
    },
    hoverColor: {
      select: theme.color.white,
      notSelect: theme.color.primary
    }
  }
};

const Link = styled.a<{ mode: string; isSelected?: boolean }>`
  display: flex;
  font-family: ${theme.font.bentonMedium.family};
  font-weight: ${theme.font.bentonMedium.weight};
  align-items: center;
  text-decoration: none;
  font-size: 0.875rem;
  border-radius: 50rem;
  margin: 0 1.25rem;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  ${({ mode, isSelected }) => {
    const state = isSelected ? 'select' : 'notSelect';
    const color = linkColours[mode].color[state];
    const hoverColor = linkColours[mode].hoverColor[state];
    return `
      color: ${color};
      svg {
        color: ${color};
        fill: ${color};
      }

      :hover {
        color: ${hoverColor};

        svg { 
          color: ${hoverColor};
          fill: ${hoverColor};
        }
      }
    `;
  }}

  ${({ isSelected }) =>
    isSelected &&
    `
    :hover svg,
    svg { 
      color: ${theme.color.secondary};
      fill: ${theme.color.secondary};
    }

    height: 2.25rem;
    padding: 0 0.625rem;
    background-color: ${theme.color.white};

    :hover {
      background-color: ${theme.color.primary};
    }
  `}
`;

const NavWrapper = styled.div`
  display: none;

  ${theme.mediaQueries.whenDesktop} {
    display: flex;
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`;

const MobileIcons = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;

  ${Link} {
    max-height: 1.5rem;
    margin: 0 1rem;

    ${({ isSelected }) =>
      isSelected
        ? `
      :hover svg,
      svg {
        margin-right: 0.25rem;
        color: ${theme.color.secondary};
        fill: ${theme.color.secondary};
      }
    `
        : `
    :hover svg,
      svg {
        color: 'transparent';
        fill: 'transparent';
      }
    `};
  }
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

export default Header;
