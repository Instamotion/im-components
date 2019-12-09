import React, { useEffect, ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import Header, { HeaderProps } from '../src';
import { withKnobs, text } from '@storybook/addon-knobs';
import messages from '../utils/locales';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import TagManager from 'react-gtm-module';

const image = require('../src/assets/header-img.png');

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);

const GtmWrapper: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  useEffect(() => {
    TagManager.initialize({ gtmId: '' });
  }, []);
  return <>{children}</>;
};

storiesOf('Header', module).add('auto', () => {
  const props: HeaderProps = {
    imgPath: image,
    phoneNumber: text('phone number', '089-411151-100'),
    variant: 'auto'
  };
  return renderWithThemeAndI18n(
    <GtmWrapper>
      <Header {...props} />
    </GtmWrapper>,
    'de',
    messages
  );
});

storiesOf('Header', module).add('dark', () => {
  const props: HeaderProps = {
    imgPath: image,
    phoneNumber: text('phone number', '089-411151-100'),
    variant: 'dark'
  };
  return renderWithThemeAndI18n(
    <GtmWrapper>
      <Header {...props} />
    </GtmWrapper>,
    'de',
    messages
  );
});

storiesOf('Header', module).add('transparent', () => {
  const props: HeaderProps = {
    imgPath: image,
    phoneNumber: text('phone number', '089-411151-100'),
    variant: 'transparent'
  };
  return renderWithThemeAndI18n(
    <GtmWrapper>
      <Header {...props} />
    </GtmWrapper>,
    'de',
    messages
  );
});
