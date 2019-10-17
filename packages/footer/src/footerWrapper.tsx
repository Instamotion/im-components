import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

const FooterWrapper = styled.footer`
  background-color: ${theme.color.lightGrey};
`;

export type FooterWrapperProps = {
  className?: string;
};

const FooterWrapperComponent: React.FC<FooterWrapperProps> = ({ children, className }) => (
  <FooterWrapper className={className}>{children}</FooterWrapper>
);

export default FooterWrapperComponent;
