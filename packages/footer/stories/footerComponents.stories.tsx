import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import MailContainer from '../src/mailSection/mailContainer';
import MailContent from '../src/mailSection/mailContent';
import Copyrights from '../src/copyrights';
import AllianzLogo from '../src/assets/AllianzLogo';
import { renderMenu } from '../src/defaultFooter';
import FooterContentComponent from '../src/footerContainer';
import SocialContainer from '../src/social/socialContainer';

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
