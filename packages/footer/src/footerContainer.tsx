import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

const FooterContentComponent: React.FC = ({ children }) => (
  <FooterContainer>{children}</FooterContainer>
);

const FooterContainer = styled.div`
  font-family: ${theme.font.sans.family};
  padding-top: 2.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  color: ${theme.color.oil};
  grid-template-areas:
    'menu1'
    'menu2'
    'menu3'
    'menu4'
    'menu5'
    'menu6'
    'social'
    'mail'
    'creators';
  ${theme.mediaQueries.whenMobileL} {
    grid-template-areas:
      'menu1 menu2'
      'menu3 menu4'
      'menu5 menu6'
      'social social'
      'mail mail'
      'creators creators';
  }
  ${theme.mediaQueries.whenTablet} {
    grid-template-areas:
      'menu1 menu2 menu3 menu4'
      'mail mail menu5 social'
      'mail mail menu6 social'
      '.. .. .. ..'
      'creators creators creators creators';
  }
  ${theme.mediaQueries.whenDesktop} {
    grid-column-gap: 0.37rem;
    grid-template-areas:
      'mail menu5 menu1 menu2 menu3 menu4'
      'social menu6 menu1 menu2 menu3 menu4'
      'social  .. .. .. .. ..'
      'creators creators creators creators creators creators';
  }
  ${theme.mediaQueries.whenDesktopXL} {
    max-width: ${theme.footer.maxWidth}px;
    margin: 0 auto;
  }
`;

export default FooterContentComponent;
