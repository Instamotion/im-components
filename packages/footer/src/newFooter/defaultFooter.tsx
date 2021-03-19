import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Icon, { AvailableIcons } from '@im-ui/icon';
import MenuItemLink from './menu/menuItemLink';
import MenuItem from './menu/menuItem';
import MenuItemHeader from './menu/menuItemHeader';
import FooterContent from './footerContainer';
import Copyrights from './copyrights';
import { openBanner } from '../helpers/cookieProBanner';
import BrandingLogo from '@im-ui/branding-logo';
import { IMTheme as theme } from '@im-ui/theme';

const StyledBrandingLogo = styled(BrandingLogo)`
  > div {
    width: auto;
    height: auto;
  }
`;

const FooterBottomSection = styled.div`
  max-width: 67.25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex-direction: column;
  padding-bottom: 3.125rem;

  & > div:first-of-type {
    margin-bottom: 1.75rem;

    ${theme.mediaQueries.whenDesktop} {
      margin-bottom: 0;
    }
  }
  ${theme.mediaQueries.whenDesktop} {
    flex-direction: row;
    padding-left: 0;
    padding-right: 0;
    padding-top: 8.25rem;
    justify-content: space-around;
  }

  ${theme.mediaQueries.whenDesktopXL} {
    justify-content: space-between;
  }
`;
const MediaWrapper = styled.div`
  display: flex;
  margin-top: 1.375rem;
  & a {
    margin-right: 1.75rem;
  }
  ${theme.mediaQueries.whenDesktopXL} {
    margin-top: 0;
    margin-bottom: 3.3125rem;
  }
`;

const BrandLogoWrapper = styled.div`
  margin-bottom: 3.5rem;
`;

const StyledIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
`;

const menus: {
  id: string;
  type: string;
  title?: JSX.Element | string;
  link?: string;
  icon?: string;
  blank?: boolean;
  track?: string;
  clickFuntion?: (event: React.MouseEvent<EventTarget>) => void;
  isHidden?: (menuOptions: MenuOptions) => boolean;
}[][] = [
  [
    {
      id: 'default.footer.menu.automobile',
      type: 'header',
      title: <FormattedMessage id="default.footer.menu.automobile" />
    },
    {
      id: 'default.footer.menu.brands',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.brands" />,
      link: '/marke'
    },
    {
      id: 'default.footer.menu.vehicle_types',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.vehicle_types" />,
      link: '/fahrzeugtyp'
    },
    {
      id: 'default.footer.menu.gearbox',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.gearbox" />,
      link: '/getriebe'
    },
    {
      id: 'default.footer.menu.fuel_types',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.fuel_types" />,
      link: '/kraftstoff'
    },
    {
      id: 'default.footer.menu.year',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.year" />,
      link: '/zulassung'
    },
    {
      id: 'default.footer.menu.day_registrations',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.day_registrations" />,
      link: '/tageszulassung'
    },
    {
      id: 'default.footer.menu.jahreswagen',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.jahreswagen" />,
      link: '/jahreswagen'
    }
  ],
  [
    {
      id: 'default.footer.menu.instamotion',
      type: 'header',
      title: <FormattedMessage id="default.footer.menu.instamotion" />
    },
    {
      id: 'default.footer.menu.about_us',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.about_us" />,
      link: '/ueber/ueber-uns'
    },
    {
      id: 'default.footer.menu.press',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.press" />,
      link: '/ueber/presse'
    },
    {
      id: 'default.footer.menu.faq',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.faq" />,
      link: '/ueber/faq'
    },
    {
      id: 'default.footer.menu.erfahrungen',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.erfahrungen" />,
      link: '/ueber/erfahrungen'
    },
    {
      id: 'default.footer.menu.blog',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.blog" />,
      link: '/blog'
    },
    {
      id: 'default.footer.menu.jobs',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.jobs" />,
      link: '/karriere/jobs'
    }
  ],
  [
    {
      id: 'default.footer.legal',
      type: 'header',
      title: <FormattedMessage id="default.footer.legal" />
    },
    {
      id: 'default.footer.imprint',
      type: 'item',
      title: <FormattedMessage id="default.footer.imprint" />,
      link: '/rechtliches/impressum'
    },
    {
      id: 'default.footer.legal_notice',
      type: 'item',
      title: <FormattedMessage id="default.footer.legal_notice" />,
      link: '/rechtliches/rechtliche-hinweise'
    },
    {
      id: 'default.footer.conditions',
      type: 'item',
      title: <FormattedMessage id="default.footer.conditions" />,
      link: '/rechtliches/agb'
    },
    {
      id: 'default.footer.data_protection',
      type: 'item',
      title: <FormattedMessage id="default.footer.data_protection" />,
      link: '/rechtliches/datenschutz'
    },
    {
      id: 'footer.privacy_settings',
      type: 'item',
      title: <FormattedMessage id="footer.privacy_settings" />,
      clickFuntion: openBanner
    },
    {
      id: 'default.footer.cancellation',
      type: 'item',
      title: <FormattedMessage id="default.footer.cancellation" />,
      link: '/rechtliches/agb#35'
    }
  ],
  [
    {
      id: 'default.footer.services',
      type: 'header',
      title: <FormattedMessage id="default.footer.services" />
    },
    {
      id: 'default.footer.warranty',
      type: 'item',
      title: <FormattedMessage id="default.footer.warranty" />,
      link: '/deine-vorteile/nur-gepruefte-fahrzeuge'
    },
    {
      id: 'default.footer.delivery',
      type: 'item',
      title: <FormattedMessage id="default.footer.delivery" />,
      link: '/deine-vorteile/so-funktionierts',
      isHidden: (menuOptions: MenuOptions) => menuOptions.showDeliveryLink !== true
    },
    {
      id: 'default.footer.financing',
      type: 'item',
      title: <FormattedMessage id="default.footer.financing" />,
      link: '/deine-vorteile/attraktive-konditionen',
      isHidden: (menuOptions: MenuOptions) => menuOptions.showFinancingLink !== true
    },
    {
      id: 'default.footer.quality',
      type: 'item',
      title: <FormattedMessage id="default.footer.quality" />,
      link: '/deine-vorteile/1-jahr-garantie',
      isHidden: (menuOptions: MenuOptions) => menuOptions.showQualityLink !== true
    },
    {
      id: 'default.footer.unsere_zusatzleistungen',
      type: 'item',
      title: <FormattedMessage id="default.footer.unsere_zusatzleistungen" />,
      link: '/deine-vorteile/zusatzleistungen',
      isHidden: (menuOptions: MenuOptions) => menuOptions.showQualityLink !== true
    },
    {
      id: 'default.footer.so_funktioniert',
      type: 'item',
      title: <FormattedMessage id="default.footer.so_funktioniert" />,
      link: '/deine-vorteile/so-funktionierts',
      isHidden: (menuOptions: MenuOptions) => menuOptions.showQualityLink !== true
    }
  ]
];

const socialMedia = [
  {
    id: 'FacebookSVG',
    type: 'item',
    icon: 'footerFacebook',
    link: 'https://www.facebook.com/Instamotion/',
    title: ''
  },
  {
    id: 'Instagram',
    type: 'item',
    icon: 'footerInstagram',
    link: 'https://www.instagram.com/instamotion_com/',
    title: ''
  },
  {
    id: 'LinkedSVG',
    type: 'item',
    icon: 'footerLinkedIn',
    link: 'https://www.linkedin.com/company/instamotion-retail-gmbh',
    title: ''
  },
  {
    id: 'YoutubeSVG',
    type: 'item',
    icon: 'footerYoutube',
    link: 'https://www.youtube.com/channel/UCpnVUOLAonPxTb-7n5KZ_Yw/',
    title: ''
  },
  {
    id: 'PhoneSVG',
    type: 'item',
    icon: 'footerPhone',
    link: 'tel:089 2109 4444',
    title: ''
  },
  {
    id: 'EmailSVG',
    type: 'item',
    icon: 'footerEmail',
    link: 'mailto:info@instamotion.com',
    title: ''
  }
];

export const renderMenu = (menuOptions?: MenuOptions, utmQuery?: string): React.ReactNode => {
  return menus.map(menu => (
    <MenuItem key={menu[0].id + menu.length}>
      {menu.map(menuItem => {
        const isMenuItemHidden = !!(
          menuOptions &&
          menuItem.isHidden &&
          menuItem.isHidden(menuOptions)
        );

        if (isMenuItemHidden) {
          return null;
        }

        switch (menuItem.type) {
          case 'header':
            return (
              <MenuItemHeader key={menuItem.type + menuItem.link}>{menuItem.title}</MenuItemHeader>
            );
          case 'item':
            const buildPath = utmQuery ? `${menuItem.link}/${utmQuery}` : menuItem.link;
            return (
              <MenuItemLink
                key={menuItem.type + menuItem.link}
                inline={!menuItem.title}
                path={buildPath}
                icon={menuItem.icon}
                title={menuItem.title}
                blank={menuItem.blank}
                track={menuItem.track}
                clickHandler={menuItem.clickFuntion}
              />
            );
          default:
            return null;
        }
      })}
    </MenuItem>
  ));
};

export interface DefaultFooterProps {
  className?: string;
  onTop?: React.ReactElement;
  googleToken?: string;
  facebookToken?: string;
  menuOptions?: MenuOptions;
  showEnvkv?: boolean;
  utmQuery?: string;
}

export interface MenuOptions {
  showFinancingLink?: boolean;
  showDeliveryLink?: boolean;
  showQualityLink?: boolean;
}

export const DefaultFooter: React.FC<DefaultFooterProps> = ({
  className,
  menuOptions,
  utmQuery
}) => (
  <footer className={className}>
    <FooterContent>
      <BrandLogoWrapper>
        <BrandingLogo
          color={theme.color.secondary}
          colorTwo={theme.color.primary}
          brandingHolder="Instamotion"
          link="/"
        />
      </BrandLogoWrapper>
      {renderMenu(menuOptions, utmQuery)}
    </FooterContent>
    <FooterBottomSection>
      <MediaWrapper>
        {socialMedia.map(menuItem => {
          return (
            <a href={menuItem.link} key={menuItem.type + menuItem.link}>
              <StyledIcon icon={menuItem.icon as AvailableIcons} color={theme.color.oil} />
            </a>
          );
        })}
      </MediaWrapper>
      <Copyrights
        logo={<StyledBrandingLogo brandingHolder="Allianz" link="/" color={theme.color.oil} />}
        title={<FormattedMessage id="default.footer.copyrights.text" />}
      />
    </FooterBottomSection>
  </footer>
);
