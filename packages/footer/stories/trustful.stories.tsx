import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import TrustfulLogo from '../src/oldFooter/trustfulSection/trustfulLogo';
import TrustfulSection from '../src/oldFooter/trustfulSection';

storiesOf('Complex | Footer', module)
  .add('Trustful logo', () => {
    const TrustfulLogoSingle = styled(TrustfulLogo)`
      margin: 20px;
      display: block;
    `;

    return <TrustfulLogoSingle logoName="autobild" />;
  })
  .add('Trustful section', () => {
    return <TrustfulSection />;
  });
