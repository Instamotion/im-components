import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Link from '@instmotion/typography/link';

import MailContainer from '../src/mailSection/mailContainer';
import MailContent from '../src/mailSection/mailContent';

import Copyrights from '../src/copyrights';
import AllianzLogo from '../assets/AllianzLogo.svg';
import DefaultFooter, { renderMenu } from '../src/defaultFooter';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import theme from '@instamotion/theme';
import FooterContentComponent from '../src/footerContainer';
import CheckoutFooter from '../src/checkoutFooter';

import TrustfulSection from '../src/trustfulSection';
import SocialContainerWithScript from '../src/social/socialContanerWithScript';

import messages from './locales';

storiesOf('Global | Footer', module)
  .add('for Checkout', () => {
    const items = [
      { text: text('home', 'home'), href: '#' },
      { text: text('test', 'test'), href: '#' },
      { text: text('test1', 'test1'), href: '#' },
      { text: text('test2', 'test2'), href: '#' },
      { text: text('test3', 'test3'), href: '#' }
    ];

    return (
      <IntlProvider locale="de" messages={messages}>
        <ThemeProvider theme={theme}>
          <CheckoutFooter>
            {items.map(item => (
              <Link href={item.href} key={item.text}>
                {item.text}
              </Link>
            ))}
          </CheckoutFooter>
        </ThemeProvider>
      </IntlProvider>
    );
  })
  .add('Default', () => {
    return (
      <IntlProvider locale="de" messages={messages}>
        <ThemeProvider theme={theme}>
          <FooterContentComponent>
            <DefaultFooter onTop={<TrustfulSection />} />
          </FooterContentComponent>
        </ThemeProvider>
      </IntlProvider>
    );
  })
  .add('newsletterForm', () => {
    return (
      <MailContainer>
        <MailContent linkHref="#" />
      </MailContainer>
    );
  })
  .add('Reviews', () => (
    <SocialContainerWithScript
      googleToken="KAnr6RCfHhQhdhBIHsVWRA8wBJR0zei0pvb0SL7wHB0W3OehKM"
      facebookToken="DzdTsLezppdIprrI4naOCMH63tLvloWbJFYNczHvtpEPIfZsRs"
    />
  ))
  .add('AllianzLogo', () => (
    <Copyrights logo={<AllianzLogo />} title="Eine Beteiligungs gesellschaft der" />
  ))
  .add('Menu', () => (
    <IntlProvider locale="de" messages={messages}>
      <ThemeProvider theme={theme}>
        <FooterContentComponent>{renderMenu()}</FooterContentComponent>
      </ThemeProvider>
    </IntlProvider>
  ));
