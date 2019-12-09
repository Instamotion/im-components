import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

interface TrustfulContainerComponentProps {
  children?: JSX.Element;
}

const TrustfulContainer = styled.div`
  background: #fff;

  ${theme.mediaQueries.whenTablet} {
    padding: 2rem 1.5rem;
  }
`;

const TrustfulContainerComponent: React.FC<TrustfulContainerComponentProps> = ({ children }) => (
  <TrustfulContainer>{children}</TrustfulContainer>
);

export default TrustfulContainerComponent;
