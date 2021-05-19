import styled, { createGlobalStyle } from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';

export const ModalStyle = createGlobalStyle`
  .ReactModal__Overlay {
    z-index: 10000;
    background-color: rgba(49, 51, 48, 0.9) !important;
  }

  .ReactModal__Content {
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    bottom: auto !important;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 0 !important;
    width: 92%;
    min-width:20rem;
    height: 95%;
    border-radius: 0.75rem;

    ${theme.mediaQueries.whenDesktop} {
      max-height: calc(100vh - 4rem);
      width: auto;
      height: auto;
      overflow: visible !important;
    }
  }
`;

export const ModalCloseButton = styled.button`
  z-index: 10000;
  position: absolute;
  top: 1.3125rem;
  right: 1.48rem;
  border: none;
  outline: none;
  background: none;
  color: ${theme.color.oil};
  cursor: pointer;
`;

export const InfoModal = styled.div`
  padding: 2rem 1rem;
  color: ${theme.color.typo};
  text-align: center;
  line-height: 1.5rem;
  font-family: ${theme.font.bentonRegular.family};

  h2 {
    margin: 0;
    padding: 1rem 0 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: ${theme.color.oil};
  }

  p {
    margin: 0;
    padding: 0;
  }

  > div {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    text-align: center;
  }

  > svg {
    display: block;
    margin: 1rem auto 2rem;
    font-size: 4rem;
    color: ${theme.color.primary};
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${theme.color.primary};
  }

  button {
    width: 100%;
  }

  ${theme.mediaQueries.whenDesktop} {
    padding: 2rem;
    width: 37.5rem;
    max-height: calc(100vh - 8rem);

    h2 {
      margin: 0;
      padding: 0.25rem 0 1rem;
      font-size: 1.5rem;
      text-align: center;
      border-bottom: 1px solid ${theme.color.primary};
    }

    p {
      padding: 1.5rem 0;
    }

    > div {
      position: static;
      padding: 0;
    }

    > svg {
      margin: 2rem auto 0;
    }

    button {
      width: 17.5rem;
    }
  }
`;

export const ModalOfferNotFound = styled(InfoModal as any)`
  > svg {
    color: ${theme.color.parisDaisy};
  }
`;

export const ModalFinancialInfo = styled(InfoModal as any)`
  text-align: left;

  button {
    background-color: ${theme.color.primary};
    border-color: ${theme.color.primary};
    outline: none;
  }
`;
