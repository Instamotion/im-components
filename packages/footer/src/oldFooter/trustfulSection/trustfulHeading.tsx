import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

interface TrustfulHeadingComponentProps {
  className?: string;
}

const TrustfulHeadingComponent: React.FC<TrustfulHeadingComponentProps> = ({ className }) => (
  <div className={className}>
    <span>Bekannt aus</span>
  </div>
);

const TrustfulHeading = styled(TrustfulHeadingComponent)`
  text-align: center;
  font-family: ${theme.font.sans.family};
  color: #323330;
  font-size: 16px;
  font-weight: 600;
`;

export default TrustfulHeading;
