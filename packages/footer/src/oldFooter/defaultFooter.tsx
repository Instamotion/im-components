import React from 'react';
import { FormattedMessage } from 'react-intl';
import TrustfulContainer from './trustfulSection/trustfulContainer';
import Icon from '@im-ui/icon';
import MailContainer from './mailSection/mailContainer';
import MailContent from './mailSection/mailContent';
import MenuItemLink from './menu/menuItemLink';
import MenuItem from './menu/menuItem';
import MenuItemHeader from './menu/menuItemHeader';
import FooterContent from './footerContainer';
import Envkv from './envkv';
import Seals from './seals';
import Copyrights from './copyrights';
import AllianzLogo from './assets/AllianzLogo';
import SocialContainer from './social/socialContainer';
import { openBanner } from '../helpers/cookieProBanner';

export const renderIcon = (iconName?: string): React.ReactNode => {
  switch (iconName) {
    case 'PhoneSVG':
      return <Icon icon="phone" color="silver" />;
    case 'EnvelopeSVG':
      return <Icon icon="envelope" color="silver" />;
    case 'FacebookSVG':
      return <Icon icon="facebook" color="silver" />;
    case 'LinkedSVG':
      return <Icon icon="linkedIn" color="silver" />;
    case 'TwitterSVG':
      return <Icon icon="twitter" color="silver" />;
    case 'YoutubeSVG':
      return <Icon icon="youtube" color="silver" />;
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
    },
    {
      id: 'default.footer.menu.to_dye',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.to_dye" />,
      link: '/farbe'
    },
    {
      id: 'default.footer.menu.germany',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.germany" />,
      link: '/deutschland'
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
  ],
  [
    {
      id: 'default.footer.free_advice',
      type: 'header',
      title: <FormattedMessage id="default.footer.free_advice" />
    },
    {
      id: 'tel:08921094444',
      type: 'item',
      icon: 'PhoneSVG',
      title: '089 2109 4444',
      link: 'tel:08921094444',
      track: 'call_from_footer'
    },
    {
      id: 'mailto:info@instamotion.com',
      type: 'item',
      icon: 'EnvelopeSVG',
      title: 'info@instamotion.com',
      link: 'mailto:info@instamotion.com',
      track: 'mail_from_footer'
    }
  ],
  [
    {
      id: 'default.footer.fold_us',
      type: 'header',
      title: <FormattedMessage id="default.footer.fold_us" />
    },
    {
      id: 'FacebookSVG',
      type: 'item',
      icon: 'FacebookSVG',
      link: 'https://www.facebook.com/Instamotion/'
    },
    {
      id: 'TwitterSVG',
      type: 'item',
      icon: 'TwitterSVG',
      link: 'https://twitter.com/instamotion_com/'
    },
    {
      id: 'LinkedSVG',
      type: 'item',
      icon: 'LinkedSVG',
      link: 'https://www.linkedin.com/company/instamotion-retail-gmbh'
    },
    {
      id: 'YoutubeSVG',
      type: 'item',
      icon: 'YoutubeSVG',
      link: 'https://www.youtube.com/channel/UCpnVUOLAonPxTb-7n5KZ_Yw/'
    }
  ]
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

export interface OldFooterProps {
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

class DefaultFooter extends React.Component<OldFooterProps> {
  componentDidMount() {}

  render() {
    const { onTop, className, googleToken, facebookToken, menuOptions, showEnvkv } = this.props;

    return (
      <footer className={className}>
        {showEnvkv && <Envkv />}
        <TrustfulContainer>{onTop}</TrustfulContainer>
        <FooterContent>
          {renderMenu(menuOptions)}
          <SocialContainer
            googleToken={googleToken as string}
            facebookToken={facebookToken as string}
          />
          <MailContainer>
            <MailContent
              title={<FormattedMessage id="default.footer.newsletter.title" />}
              subTitle={<FormattedMessage id="default.footer.newsletter.subtitle" />}
              linkText={<FormattedMessage id="default.footer.newsletter.linkText" />}
              linkHref="/rechtliches/datenschutz"
            />
          </MailContainer>
          <Seals />
          <Copyrights
            logo={<AllianzLogo />}
            title={<FormattedMessage id="default.footer.copyrights.text" />}
          />
        </FooterContent>
      </footer>
    );
  }
}

export default DefaultFooter;
