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
import Copyrights from './copyrights';
import AllianzLogo from './assets/AllianzLogo';
import SocialContainerWithScript from './social/socialContanerWithScript';

export const renderIcon = (iconName?: string): React.ReactNode => {
  switch (iconName) {
    case 'PhoneSVG':
      return <Icon iconName="phone" color="silver" />;
    case 'EnvelopeSVG':
      return <Icon iconName="envelope" color="silver" />;
    case 'FacebookSVG':
      return <Icon iconName="facebook" color="silver" />;
    case 'LinkedSVG':
      return <Icon iconName="linkedIn" color="silver" />;
    case 'TwitterSVG':
      return <Icon iconName="twitter" color="silver" />;
    case 'YoutubeSVG':
      return <Icon iconName="youtube" color="silver" />;
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
      link: '/ueber-uns'
    },
    {
      id: 'default.footer.menu.press',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.press" />,
      link: '/presse'
    },
    {
      id: 'default.footer.menu.faq',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.faq" />,
      link: '/faq'
    },
    {
      id: 'default.footer.menu.how_it_works',
      type: 'item',
      title: <FormattedMessage id="default.footer.menu.how_it_works" />,
      link: '/so-funktionierts'
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
      link: '/jobs'
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
      link: '/impressum'
    },
    {
      id: 'default.footer.legal_notice',
      type: 'item',
      title: <FormattedMessage id="default.footer.legal_notice" />,
      link: '/rechtliche-hinweise'
    },
    {
      id: 'default.footer.conditions',
      type: 'item',
      title: <FormattedMessage id="default.footer.conditions" />,
      link: '/agb'
    },
    {
      id: 'default.footer.data_protection',
      type: 'item',
      title: <FormattedMessage id="default.footer.data_protection" />,
      link: '/datenschutz'
    },
    {
      id: 'default.footer.shipping_and_payment',
      type: 'item',
      title: <FormattedMessage id="default.footer.shipping_and_payment" />,
      link: '/versand-und-zahlung'
    },
    {
      id: 'default.footer.cancellation',
      type: 'item',
      title: <FormattedMessage id="default.footer.cancellation" />,
      link: '/agb#Widerruf'
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
      link: '/garantie'
    },
    {
      id: 'default.footer.part_exchange',
      type: 'item',
      title: <FormattedMessage id="default.footer.part_exchange" />,
      link: '/inzahlungnahme',
      track: 'inzahlungsnahme button'
    },
    {
      id: 'default.footer.financing_or_leasing',
      type: 'item',
      title: <FormattedMessage id="default.footer.financing_or_leasing" />,
      link: '/gebrauchtwagenkauf'
    },
    {
      id: 'default.footer.guidebook_family_car',
      type: 'item',
      title: <FormattedMessage id="default.footer.guidebook_family_car" />,
      link: '/familienauto'
    },
    {
      id: 'default.footer.advisor_novice_driver',
      type: 'item',
      title: <FormattedMessage id="default.footer.advisor_novice_driver" />,
      link: '/fahranfaenger'
    },
    {
      id: 'default.footer.guide_for_owners',
      type: 'item',
      title: <FormattedMessage id="default.footer.guide_for_owners" />,
      link: '/hund-im-auto'
    }
  ],
  [
    {
      id: 'default.footer.free_advice',
      type: 'header',
      title: <FormattedMessage id="default.footer.free_advice" />
    },
    {
      id: 'tel:089411151100',
      type: 'item',
      icon: 'PhoneSVG',
      title: '089 411 151 100',
      link: 'tel:089411151100',
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

export const renderMenu = (): React.ReactNode => {
  return menus.map(menu => (
    <MenuItem key={menu[0].id + menu.length}>
      {menu.map(menuItem => {
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
  googleToken: string;
  facebookToken: string;
}

const DefaultFooter: React.FC<DefaultFooterProps> = ({
  onTop,
  className,
  googleToken,
  facebookToken
}) => {
  return (
    <footer className={className}>
      <Envkv />
      <TrustfulContainer>{onTop}</TrustfulContainer>
      <FooterContent>
        {renderMenu()}
        <SocialContainerWithScript googleToken={googleToken} facebookToken={facebookToken} />
        <MailContainer>
          <MailContent
            title={<FormattedMessage id="default.footer.newsletter.title" />}
            subTitle={<FormattedMessage id="default.footer.newsletter.subtitle" />}
            linkText={<FormattedMessage id="default.footer.newsletter.linkText" />}
            linkHref="#"
          />
        </MailContainer>
        <Copyrights
          logo={<AllianzLogo />}
          title={<FormattedMessage id="default.footer.copyrights.text" />}
        />
      </FooterContent>
    </footer>
  );
};

export default DefaultFooter;
