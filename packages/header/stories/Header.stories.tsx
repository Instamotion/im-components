import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header, { HeaderProps, MenuOptions } from '../src';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import messages from '../utils/locales';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import TagManager from 'react-gtm-module';

const GtmWrapper: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  useEffect(() => {
    TagManager.initialize({ gtmId: '' });
  }, []);
  return <>{children}</>;
};

const stories = storiesOf('Complex | Header', module);
stories.addDecorator(withKnobs);
stories.add('Süddeutsche Zeitung', () => {
  return renderWithThemeAndI18n(<Header type="sz" />, 'de', messages);
});
stories.add('default', () => {
  const props: HeaderProps = {
    phoneNumber: text('phone number', '089-411151-101'),
    favoritesCount: number('favorites', 23),
    type: 'default',
    menuOptions: {
      showDeliveryLink: true,
      showFinancingLink: true,
      showQualityLink: true
    },
    logoUrl: 'https://instamotion.com/'
  };
  return renderWithThemeAndI18n(
    <GtmWrapper>
      <Header {...props} />
    </GtmWrapper>,
    'de',
    messages
  );
});
