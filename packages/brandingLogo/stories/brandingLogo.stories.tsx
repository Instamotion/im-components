import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import BrandingLogo, { BrandingLogoProps } from '../src';

storiesOf('Branding Logo', module)
  .add('Instamotion', () => {
    const props: BrandingLogoProps = {
      link: '#',
      color: color('Logo color', '#000'),
      colorTwo: color('Logo second color', '#000'),
      brandingHolder: 'Instamotion',
      onClick: action('BrandingLogo click')
    };

    return <BrandingLogo {...props} />;
  })
  .add('Allianz', () => {
    const props: BrandingLogoProps = {
      link: '#',
      color: color('Logo color', '#000'),
      brandingHolder: 'Allianz',
      onClick: action('BrandingLogo click')
    };

    return <BrandingLogo {...props} />;
  });
