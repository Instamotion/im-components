import * as React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

interface TrustfulContainerComponentProps {
    children?: JSX.Element;
}

const TrustfulContainer = styled.div`
  background: #fff;

  ${theme.mediaQueries.whenTablet} {
    padding: 1.5rem 1rem;
  }
`;

const TrustfulContainerComponent: React.FC<TrustfulContainerComponentProps> = ({ children }) => (
  <TrustfulContainer>{children}</TrustfulContainer>
);


export default TrustfulContainerComponent;
