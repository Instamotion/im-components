import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header, { HeaderProps, HeaderTypes, MenuOptions } from '../src';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import messages from '../utils/locales';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import TagManager from 'react-gtm-module';

const Content = styled.div`
  height: 3000px;
`;

const GtmWrapper: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  useEffect(() => {
    TagManager.initialize({ gtmId: '' });
  }, []);
  return <>{children}</>;
};

const stories = storiesOf('Complex | Header', module);
stories.addDecorator(withKnobs);
stories.add('Süddeutsche Zeitung', () => {
  return renderWithThemeAndI18n(<Header type={HeaderTypes.sz} />, 'de', messages);
});
stories.add('new header light', () => {
  return renderWithThemeAndI18n(
    <div>
      <Header type={HeaderTypes.new} light />
      <Content />
    </div>,
    'de',
    messages
  );
});
stories.add('new header usual', () => {
  return renderWithThemeAndI18n(
    <div>
      <Header type={HeaderTypes.new} />
      <Content />
    </div>,
    'de',
    messages
  );
});
stories.add('default', () => {
  const props: HeaderProps = {
    phoneNumber: text('phone number', '089-411151-101'),
    favoritesCount: number('favorites', 23),
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
