import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

const FooterWrapperComponent: React.FC = ({ children }) => (
  <FooterWrapper>{children}</FooterWrapper>
);

const FooterWrapper = styled.footer`
  background-color: ${theme.color.lightGrey};
`;

export default FooterWrapperComponent;
