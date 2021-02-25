import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

interface Props {
  logo: React.ReactNode;
  title: JSX.Element | string;
}

const CopyrightsComponent: React.FC<Props> = ({ logo, title }) => (
  <FooterCreators>
    <FooterCreatorsTitle>{title}</FooterCreatorsTitle>
    {logo}
  </FooterCreators>
);

const FooterCreatorsTitle = styled.div`
  font-size: 0.875rem;
  margin-right: 0.375rem;
`;

const FooterCreators = styled.div`
  grid-area: creators;
  display: flex;
  align-items: center;
  ${theme.mediaQueries.whenDesktop} {
    justify-content: center;
  }
`;

export default CopyrightsComponent;
