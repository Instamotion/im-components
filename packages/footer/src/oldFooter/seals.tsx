import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import SealQuality from './assets/seal-quality';
import SealReturn from './assets/seal-return';
import SealWarranty from './assets/seal-warranty';

const SealsComponent: React.FC = () => (
  <Seals>
    <SealQuality />
    <SealReturn />
    <SealWarranty />
  </Seals>
);

const Seals = styled.div`
  grid-area: seals;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 0 0 3rem;

  svg {
    margin: 0 0 0 1rem;
  }

  svg:first-child {
    margin: 0;
  }

  ${theme.mediaQueries.whenMobileL} {
    margin: 0 0 3rem;
  }

  ${theme.mediaQueries.whenTablet} {
    margin: 0;
  }

  ${theme.mediaQueries.whenDesktop} {
    margin: 0;
  }
`;

export default SealsComponent;
