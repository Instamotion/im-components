import { css, createGlobalStyle } from 'styled-components';
import { Theme } from '.';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    body {
      font-family: ${theme.font.sans.family};
      margin: 0;
      padding: 0;
      max-width: 100%;
      overflow-x: hidden;
    }
  `}
`;
