import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import MailContainer from '../src/mailSection/mailContainer';
import MailContent from '../src/mailSection/mailContent';
import Copyrights from '../src/copyrights';
import AllianzLogo from '../src/assets/AllianzLogo';
import { renderMenu } from '../src/defaultFooter';
import FooterContentComponent from '../src/footerContainer';
import SocialContainerWithScript from '../src/social/socialContanerWithScript';

import messages from '../utils/locales';

storiesOf('Footer | Components', module)
  .add('newsletterForm', () =>
    renderWithThemeAndI18n(
      <MailContainer>
        <MailContent linkHref="#" />
      </MailContainer>
    )
  )
  .add('Reviews', () =>
    renderWithThemeAndI18n(
      <SocialContainerWithScript
        googleToken="KAnr6RCfHhQhdhBIHsVWRA8wBJR0zei0pvb0SL7wHB0W3OehKM"
        facebookToken="DzdTsLezppdIprrI4naOCMH63tLvloWbJFYNczHvtpEPIfZsRs"
      />
    )
  )
  .add('AllianzLogo', () =>
    renderWithThemeAndI18n(
      <Copyrights logo={<AllianzLogo />} title="Eine Beteiligungs gesellschaft der" />
    )
  )
  .add('Menu', () =>
    renderWithThemeAndI18n(
      <FooterContentComponent>{renderMenu()}</FooterContentComponent>,
      'de',
      messages
    )
  );
