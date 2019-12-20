import React from 'react';
import styled from 'styled-components';
import BrandingLogo from '@im-ui/branding-logo';
import CallerImg from './items/callerImg';
import Link from './items/link';
import Burger from './items/burger';
import MobileMenu from './items/mobileMenu';
import theme, { AvailableColors } from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export interface HeaderProps {
  imgPath: string;
  phoneNumber: string;
  variant: 'auto' | 'dark' | 'transparent';
}

export interface HeaderWrapperProps {
  isDark: boolean;
}

export const Header: React.FC<HeaderProps> = ({ variant, imgPath, phoneNumber }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setDark] = React.useState(variant === 'dark' ? true : false);

  useScrollPosition(
    ({ currPos }: ScrollProps) => {
      if (variant !== 'auto') return;
      setDark(currPos.y < 0);
    },
    [isDark],
    undefined,
    false,
    50
  );

  const brandColor = isDark ? AvailableColors.white : AvailableColors.oil;
  const brandColorTwo = isDark ? AvailableColors.downy : AvailableColors.oil;
  const allianzColor = isDark ? '#138' : AvailableColors.oil;
  const textColor: keyof typeof AvailableColors = isDark ? 'white' : 'oil';
  const textColorHover: keyof typeof AvailableColors = isDark ? 'silver' : 'brightGrey';

  return (
    <HeaderWrapper isDark={isDark}>
      <HeaderBar>
        <Burger clickedCb={() => setIsOpen(!isOpen)} isOpen={isOpen} textColor={textColor}></Burger>
        <LogoWrapper>
          <BrandingLogo
            color={brandColor}
            colorTwo={brandColorTwo}
            brandingHolder="InstamotionAllianz"
            link="/"
          />
        </LogoWrapper>
        <SearchWrapper>
          <a href="/autos">
            <Icon iconName={'search'} size={16} color={textColor} />
          </a>
        </SearchWrapper>
        <LogoDesktopWrapper>
          <BrandingLogo
            color={brandColor}
            colorTwo={brandColorTwo}
            brandingHolder="Instamotion"
            link="/"
          />
        </LogoDesktopWrapper>
        <PhoneWrapper>
          <HelpWrapper>
            <FormattedMessage id="header.menu.help" />
          </HelpWrapper>
          <CallerImg imgPath={imgPath} />
          <Link
            text={phoneNumber}
            track="callFromHeader"
            color={textColor}
            colorHover={textColorHover}
            icon="phone"
            path={`tel:${phoneNumber}`}
          />
        </PhoneWrapper>
        <NavWrapper>
          <Link
            text={<FormattedMessage id="header.menu.search" />}
            color={textColor}
            colorHover={textColorHover}
            icon="search"
            path="/autos"
          />
          <Link
            text={<FormattedMessage id="header.menu.top_offers" />}
            color={textColor}
            colorHover={textColorHover}
            icon="trophy"
            path="/angebote"
          />
          <Link
            text={<FormattedMessage id="header.menu.wish_list" />}
            color={textColor}
            colorHover={textColorHover}
            icon="star"
            path="/favoriten"
          />
        </NavWrapper>
      </HeaderBar>
      <AllianzBar>
        <BrandingLogo color={allianzColor} brandingHolder="Allianz" link="/" />
      </AllianzBar>
      <MobileMenu isOpen={isOpen} phoneNumber={phoneNumber}></MobileMenu>
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  background: ${props => (props.isDark ? theme.color.oil : 'transparent')};
  color: ${props => (props.isDark ? 'white' : 'black')};
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
  width: 6rem;
  height: 2rem;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  cursor: pointer;
  display: block;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const LogoDesktopWrapper = styled.div`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
`;

const PhoneWrapper = styled.div`
  flex-shrink: 0;
  align-items: center;
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
`;

const HelpWrapper = styled.span`
  margin-left: 1.5rem;
  line-height: 1.6;
  display: none;
  ${theme.mediaQueries.whenDesktopXL} {
    display: inline;
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

const AllianzBar = styled.div`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: inline-flex;
  }
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  transition: background-color 0.3s ease;
  background-color: ${theme.color.white};
  height: 100%;
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

interface ScrollProps {
  prevPos: {
    x: Number;
    y: Number;
  };
  currPos: {
    x: Number;
    y: Number;
  };
}

export default Header;
