import React from 'react';
import { storiesOf } from '@storybook/react';
import { HeaderWrapper, HeaderWrapperProps } from '../src';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import messages from '../utils/locales';
import { renderWithThemeAdnI18n } from '@im-ui/utils';

const image = require('../src/assets/header-img.png');

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);

const Variants: Array<'transparent' | 'dark'> = ['transparent', 'dark'];

storiesOf('Header', module).add('Default', () => {
  const props: HeaderWrapperProps = {
    variant: select('variant', Variants, Variants[0]),
    imgPath: image,
    phoneNumber: text('phone number', '089-411151-100')
  };
  return renderWithThemeAdnI18n(<HeaderWrapper {...props} />, 'de', messages);
});
