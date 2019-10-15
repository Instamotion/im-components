import React from 'react';
import { storiesOf } from '@storybook/react';
import BrandingLogo from '@instamotion/branding-logo';
import Header from '../src';

storiesOf('Header', module).add('default', () => (
  <Header
    onTheLeft={<BrandingLogo color="#fff" brandingHolder="Instamotion" link="/" />}
    inTheMiddle={<div> Some contacts </div>}
    onTheRight={<BrandingLogo color="#fff" brandingHolder="Allianz" link="/" />}
  />
));
