import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

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
  font-size: 0.75rem;
  margin-right: 0.375rem;
`;

const FooterCreators = styled.div`
  grid-area: creators;
  margin-bottom: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.mediaQueries.whenDesktop} {
    padding-top: 2.5rem;
  }
`;

export default CopyrightsComponent;
