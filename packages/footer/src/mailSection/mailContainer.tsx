import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

interface Props {
  children?: JSX.Element;
}

const MailContainerComponent: React.FC<Props> = ({ children }) => (
  <MailContainer>{children}</MailContainer>
);

const MailContainer = styled.div`
  grid-area: mail;
  margin: 1.5rem 0 3rem;
  ${theme.mediaQueries.whenTablet} {
    padding-right: 2.8rem;
    margin: 0;
  }
  ${theme.mediaQueries.whenDesktop} {
    margin: 0;
  }
`;

export default MailContainerComponent;
