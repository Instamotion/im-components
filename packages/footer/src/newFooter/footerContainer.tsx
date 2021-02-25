import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

const FooterContentComponent: React.FC = ({ children }) => (
  <FooterWrapper>
    <FooterContainer>{children}</FooterContainer>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  background-color: ${theme.color.white};
`;

const FooterContainer = styled.div`
  font-family: ${theme.font.sans.family};
  padding-top: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: grid;
  grid-template-areas:
    'menu1'
    'menu2'
    'menu3'
    'menu4'
    'menu5'
    'menu6';

  & > :first-child {
    grid-column: 1/3;
  }
  ${theme.mediaQueries.whenMobileL} {
    grid-template-areas:
      'menu1 menu1'
      'menu2 menu4'
      'menu3 menu5'
      'menu6 menu6'
      'creators creators';
  }
  ${theme.mediaQueries.whenTablet} {
    max-width: 67.25rem;
    margin: 0 auto;
    box-sizing: border-box;
    grid-column-gap: 0.37rem;
    grid-template-areas:
      'menu1 menu1 . ..'
      'menu2 menu4 menu3 menu5'
      'menu2 menu4 menu3 menu5';

    & > :first-child {
      grid-column: auto;
    }
  }
  ${theme.mediaQueries.whenDesktopXL} {
    max-width: 67.25rem;
    margin: 0 auto;
    box-sizing: border-box;
    grid-column-gap: 0.37rem;
    grid-template-areas:
      'menu1 menu2 menu4 menu3 menu5'
      'menu1 menu2 menu4 menu3 menu5'
      'seals seals . .. ..'
      'seals seals creators creators creators';
  }
  ${theme.mediaQueries.whenDesktop} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  ${theme.mediaQueries.whenDesktopXL} {
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto;
  }
`;

export default FooterContentComponent;
