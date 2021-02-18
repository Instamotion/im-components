import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Icon from '@im-ui/icon';
import MenuItemLink from './menu/menuItemLink';
import MenuItem from './menu/menuItem';
import MenuItemHeader from './menu/menuItemHeader';
import FooterContent from './footerContainer';
import Copyrights from './copyrights';
import AllianzLogo from './assets/AllianzLogo';
import { openBanner } from '../helpers/cookieProBanner';
import { BrandLogo } from './BrandLogo';
import { theme } from '@themes/themesV4/default';

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
  & a {
    margin-right: 1.75rem;
  }
  ${theme.mediaQueries.whenDesktopXL} {
    margin-bottom: 3.3125rem;
  }
`;

const BrandLogoWrapper = styled.div`
  margin-bottom: 3.5rem;
`;

export const renderIcon = (iconName?: string): React.ReactNode => {
  switch (iconName) {
    case 'PhoneSVG':
      return <Icon icon="phone" color="oil" size="lg" />;
    case 'EnvelopeSVG':
      return <Icon icon="envelope" color="oil" size="lg" />;
    case 'FacebookSVG':
      return <Icon icon="facebook" color="oil" size="lg" />;
    case 'LinkedSVG':
      return <Icon icon="linkedIn" color="oil" size="lg" />;
    case 'TwitterSVG':
      return <Icon icon="twitter" color="oil" size="lg" />;
    case 'YoutubeSVG':
      return <Icon icon="youtube" color="oil" size="lg" />;
    case 'AllianzLogo':
      return <AllianzLogo />;
    default:
      return null;
  }
};

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
      link: '/rechtliches/agb#Widerruf'
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
    icon: 'FacebookSVG',
    link: 'https://www.facebook.com/Instamotion/',
    title: ''
  },
  {
    id: 'TwitterSVG',
    type: 'item',
    icon: 'TwitterSVG',
    link: 'https://twitter.com/instamotion_com/',
    title: ''
  },
  {
    id: 'LinkedSVG',
    type: 'item',
    icon: 'LinkedSVG',
    link: 'https://www.linkedin.com/company/instamotion-retail-gmbh',
    title: ''
  },
  {
    id: 'YoutubeSVG',
    type: 'item',
    icon: 'YoutubeSVG',
    link: 'https://www.youtube.com/channel/UCpnVUOLAonPxTb-7n5KZ_Yw/',
    title: ''
  }
];

export const renderMenu = (menuOptions?: MenuOptions): React.ReactNode => {
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
            return (
              <MenuItemLink
                key={menuItem.type + menuItem.link}
                inline={!menuItem.title}
                path={menuItem.link}
                icon={renderIcon(menuItem.icon)}
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

export interface NewFooterProps {
  className?: string;
  onTop?: React.ReactElement;
  googleToken?: string;
  facebookToken?: string;
  menuOptions?: MenuOptions;
  showEnvkv?: boolean;
}

export interface MenuOptions {
  showFinancingLink?: boolean;
  showDeliveryLink?: boolean;
  showQualityLink?: boolean;
}

const DefaultFooter: React.FC<NewFooterProps> = ({ className, menuOptions }) => (
  <footer className={className}>
    <FooterContent>
      <BrandLogoWrapper>
        <BrandLogo
          color={theme.color.secondary}
          colorTwo={theme.color.primary}
          brandingHolder="Instamotion"
          link="/"
        />
      </BrandLogoWrapper>
      {renderMenu(menuOptions)}
    </FooterContent>
    <FooterBottomSection>
      <MediaWrapper>
        {socialMedia.map(menuItem => {
          return (
            <MenuItemLink
              key={menuItem.type + menuItem.link}
              inline={!menuItem.title}
              path={menuItem.link}
              icon={renderIcon(menuItem.icon)}
            />
          );
        })}
      </MediaWrapper>
      <Copyrights
        logo={<AllianzLogo />}
        title={<FormattedMessage id="default.footer.copyrights.text" />}
      />
    </FooterBottomSection>
  </footer>
);

export default DefaultFooter;
