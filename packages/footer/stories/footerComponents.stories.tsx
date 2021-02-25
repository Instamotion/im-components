import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import MailContainer from '../src/oldFooter/mailSection/mailContainer';
import MailContent from '../src/oldFooter/mailSection/mailContent';
import Copyrights from '../src/oldFooter/copyrights';
import AllianzLogo from '../src/oldFooter/assets/AllianzLogo';
import { renderMenu } from '../src/oldFooter/defaultFooter';
import FooterContentComponent from '../src/oldFooter/footerContainer';
import SocialContainer from '../src/oldFooter/social/socialContainer';

import messages from '../utils/locales';

storiesOf('Complex | Footer', module)
  .add('News letter form', () =>
    renderWithThemeAndI18n(
      <MailContainer>
        <MailContent linkHref="#" />
      </MailContainer>
    )
  )
  .add('Reviews', () =>
    renderWithThemeAndI18n(<SocialContainer googleToken="g_token" facebookToken="f_token" />)
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
