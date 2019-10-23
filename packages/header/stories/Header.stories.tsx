import React from 'react';
import { storiesOf } from '@storybook/react';
import Header, { HeaderProps } from '../src';
import { withKnobs, select } from '@storybook/addon-knobs';
const image = require('../src/assets/header-img.png');

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);

const Variants: Array<'transparent' | 'dark'> = ['transparent', 'dark'];

storiesOf('Header', module).add('Default', () => {
  const props: HeaderProps = {
    variant: select('variant', Variants, Variants[0]),
    imgPath: image
  };
  return <Header {...props} />;
});
