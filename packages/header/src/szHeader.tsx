import React from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from '@im-ui/theme';

const SzHeaderComponent: React.FC = () => (
  <>
    <link
      rel="stylesheet"
      href="https://www.sueddeutsche.de/assets/contracts/fonts/fonts2020.1.css"
    />
    <SZHeaderStyles></SZHeaderStyles>
    <header className="css-4duy2j-header">
      <a href="https://www.sueddeutsche.de">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 536 62"
          fill="#29293a"
          aria-hidden="false"
          height="20"
          className="css-1vdppt3-logo"
        >
          <title>Süddeutsche Zeitung</title>
          <path d="M163.1 24.12c-.7-1.99-2.63-4.17-4.93-4.78-1.97-.62-4.28.14-6.01 1.65-3.95 3.84-3.9 9.52-2.35 14.44l13.3-11.31zm4.89-.2l-16.91 14.73c1.45 3.88 7.47 7.76 13.43.8l2.26 2.46c-3.53 4.31-9.96 5.54-15.32 4.4-4.84-1.04-8.74-5.63-10.05-10.26-1.65-5.83-.24-11.88 4.37-15.67 4-3.55 14.14-7.81 22.22 3.55zm161.31.2c-.7-1.99-2.63-4.17-4.93-4.78-1.97-.62-4.27.14-6.01 1.65-3.95 3.84-3.9 9.52-2.35 14.44l13.3-11.31zm4.89-.2l-16.91 14.73c1.45 3.88 7.47 7.76 13.43.8l2.26 2.46c-3.53 4.31-9.96 5.54-15.32 4.4-4.83-1.04-8.73-5.63-10.05-10.26-1.64-5.83-.23-11.88 4.37-15.67 4-3.55 14.19-7.81 22.22 3.55zm59.7.2c-.7-1.99-2.62-4.17-4.93-4.78-1.97-.62-4.27.14-6 1.65-3.95 3.84-3.9 9.52-2.36 14.44l13.3-11.31zm4.85-.2l-16.92 14.73c1.46 3.88 7.47 7.76 13.44.8l2.25 2.46c-3.52 4.31-9.96 5.54-15.31 4.4-4.84-1.04-8.74-5.63-10.05-10.26-1.65-5.83-.24-11.88 4.37-15.67 4.04-3.55 14.18-7.81 22.22 3.55zm-153.71-4.1l-2.2 3.02c-3.63-2.84-9.5-4.92-13.77-2.93-3.2 1.6-2.59 5.25 1.97 6.48 2.96.95 12.73 1.8 13.81 9.18.38 3.03-1.03 5.73-3.43 7.62-5.54 4.26-14.33 3.27-20.43 1.14-.05-.1 1.4-4.88 1.4-4.88a24.34 24.34 0 005.46 2.6c9.39 3.41 14.8-2.36 8.92-5.77-2.58-1.56-5.96-1.7-9.25-3.03-2.45-1-4.98-2.88-5.78-5.63-.8-2.84-.24-6.15 1.5-7.9 5.64-5.3 15.7-3.27 21.8.1M45.9 10.71a3.8 3.8 0 117.6 0 3.8 3.8 0 01-3.8 3.84 3.86 3.86 0 01-3.8-3.84"></path>
          <path d="M354.25 42.86c5.82.24 12.5-.95 17.9-2.18-.24.43-1.88 4.36-1.88 4.36h-26.64l18.42-42.08c-1.93 0-5.73.05-5.73.05-7.29 0-9.73.95-16.26 4.97l.47-7.67h31.76l-18.04 42.55zM284.2 11.44v11.69c4.32-3.93 10.47-8.05 16.25-5.12 3.8 2.42 3.29 6.77 3.2 11.41-.14 7.43-.57 15.57-.57 15.57h-7.28c.23-9.6.28-16.7-.23-19.74-.29-1.42-.61-2.88-2.16-3.6-3.48-1.37-6.77 1.9-9.12 4.46v18.83h-8.22V13.61h-3v-2.17h11.13zm141.91 7.52l.47 26.08h-8.17l.37-26.08h-5.12v-2.18h5.12V15.6s1.98-.76 3.67-1.56c2.35-1.1 3.66-2.08 3.66-2.08v4.77h16.3s-1.83 18.27.28 23.53c.52 1.32 1.74 1.9 3.2 1.56 2.77-.76 5.45-2.6 7.75-4.6V18.97h-4.32v-2.18h12.5v28.26h-8.23v-4.36c-1.4.71-12.82 8.29-17.19 3.74-2.58-2.88-2.68-8.19-2.82-12.82-.1-4.26.7-8.62 1.08-12.69h-8.55v.05zM52.24 16.78s-1.83 18.27.28 23.52c.52 1.33 1.74 1.9 3.2 1.57 2.77-.76 5.44-2.6 7.75-4.6v-18.3h-4.33v-2.18h12.5v28.26h-8.22v-4.36c-1.41.71-12.82 8.29-17.2 3.74-2.58-2.88-2.67-8.19-2.81-12.82-.1-4.26.7-8.62 1.08-12.69H40.3v-2.17l11.93.04zm128 0s-1.82 18.27.29 23.52c.52 1.33 1.74 1.9 3.2 1.57 2.77-.76 5.44-2.6 7.75-4.6v-18.3h-4.33v-2.18h12.5v28.26h-8.22v-4.36c-1.41.71-12.83 8.29-17.2 3.74-2.58-2.88-2.67-8.19-2.81-12.82-.1-4.26.7-8.62 1.08-12.69h-4.18v-2.17l11.93.04zM63.1 10.72a3.8 3.8 0 117.61 0 3.8 3.8 0 01-3.8 3.84 3.86 3.86 0 01-3.81-3.84m347.86 6.06v28.26h-8.17V18.96h-4.14v-2.18zM403 10.72a3.8 3.8 0 117.61 0 3.8 3.8 0 01-3.8 3.84 3.86 3.86 0 01-3.81-3.84m-187.53 6.06h5.73v2.18h-5.73l.47 26.08h-8.17l.37-26.08h-5.73v-2.18h5.73V15.6s1.97-.76 3.67-1.56c2.35-1.1 3.66-2.08 3.66-2.08v4.82zm56.18 3.65l-1.64 2.41c-2.25-3.22-6.86-4.26-9.44-2.84-5.17 3.03-5.17 10.13-4.23 15.76.66 3.17 2.72 6.96 6.15 7.53 2.68.38 5.55-1.56 6.63-2.56l2.67 2.98s-1.6 1.23-3.43 1.75c-5.2 1.85-11.32 1.1-15.3-2.6-4.28-3.97-5.83-9.18-4.8-14.77.85-4.78 5.3-9.27 9.91-10.55 4.56-1.23 10.05-.24 13.48 2.89M96.82 31.27s-.38 11.12-6.63 11.12c-6.24 0-6-11.17-6-11.17s.09-10.5 6.61-10.5c6.49 0 6.02 10.54 6.02 10.54zm-3.1-19.83v2.17h2.77v7.43s-5.5-6.34-13.81-1.94c-4.98 2.98-7.05 8.33-6.48 13.82.37 4.92 2.81 9.99 7.6 11.98 4.47 1.65 9.45.14 12.64-3.03v3.22h7.61v-33.6H93.72v-.06zM129 31.27s-.38 11.12-6.63 11.12c-6.24 0-6.01-11.17-6.01-11.17s.1-10.5 6.62-10.5c6.49 0 6.02 10.54 6.02 10.54zm-3.15-19.83v2.17h2.77v7.43s-5.5-6.34-13.8-1.94c-4.99 2.98-7.06 8.33-6.5 13.82.38 4.92 2.83 9.99 7.62 11.98 4.46 1.65 9.44.14 12.63-3.03v3.22h7.57v-33.6h-10.29v-.06zM497.1 28.99c.05 5.02.1 9.85-.09 16h-8.03c.51-6.53 2.63-21.82-2.82-23-3.48-.76-6.67 1.9-9.12 4.59v18.41h-7.94V18.96h-3.14v-2.18H477v6.58c3.8-3.64 8.88-7.62 14.18-6.53 1.6.33 5.78 1.52 5.92 12.16"></path>
          <path d="M38.2 6.42L41.05 4l1.31 1.23-6.57 5.64C29.45 5.99 21.14 1.64 12.78 4c-2.16.71-5.08 2.6-5.17 5.35-.1 4.92 9.54 7.43 9.54 7.43s12.92 3.98 18.22 9c2.45 2.22 3.25 5.82 2.59 9.37C33.92 52.6 10 44.14 4.28 39.4l-2.96 3.03L0 41.25l6.67-6.81c5.3 3.97 6.48 4.68 11.37 6.76 12.64 4.78 16.77-2.6 13.3-7.28-5.88-6.96-15.88-5.78-22.98-10.75-3.76-2.7-6.43-6.67-5.78-11.45.43-4.55 5.08-8.62 9.07-10.13 9.07-3.6 19.26-.71 26.54 4.83m478.03 37.9c-4.27 0-7.7-5.48-7.7-12.3 0-6.76 3.47-12.3 7.7-12.3 4.28 0 7.7 5.49 7.7 12.3 0 6.82-3.42 12.3-7.7 12.3m19.5-23a3.76 3.76 0 00-7.23-1.47c0 .01-.48 1.15-.38 2.28a9.66 9.66 0 00-1.55-1.56c-4.7-4.07-12.45-4.64-17.85-1.9-5.83 3.04-8.83 9.14-7.99 15.67.52 5.5 5.4 10.6 10.34 12.3-.85.39-3.34.95-3.48 3.89-.1 5.01 7.84 2.36 11.74 3.74.99.52 1.5 1.51 1.32 2.7a3.07 3.07 0 01-2.02 1.94c-3.66 1.23-7.47-.81-10.1-3.32l-2.82 2.23c1.7 1.37 3.38 2.65 5.26 3.3 3.24 1.24 10.76 1.8 14.24-3.11.75-1 1.03-3.13.32-4.4-2.58-4.36-8.5-2.32-11.98-2.8-1.92-.23-3.28-3.12 3.72-3.69 5.3-.24 10.19-3.36 12.96-8.14 2.3-4.07 1.65-10.08-.1-14.06.85.2 1.46.29 1.98.2a3.79 3.79 0 003.62-3.8"></path>
        </svg>
      </a>
      <ul className="css-rgxpu2-nav">
        <li className="css-1t1j9fp-navItem">
          <a
            href="https://www.sueddeutsche.de"
            data-title="SZ.de"
            className="css-341ceg-navLink-activeNavLink-ProductHeader"
          >
            SZ.de
          </a>
        </li>
        <li className="css-1t1j9fp-navItem">
          <a
            href="https://zeitung.sueddeutsche.de"
            data-title="Zeitung"
            className="css-fvji8-navLink"
          >
            Zeitung
          </a>
        </li>
        <li className="css-1t1j9fp-navItem">
          <a
            href="https://sz-magazin.sueddeutsche.de"
            data-title="Magazin"
            className="css-fvji8-navLink"
          >
            Magazin
          </a>
        </li>
      </ul>
    </header>
  </>
);

const SZHeaderStyles = createGlobalStyle`
  .css-4duy2j-header {
    width: 100vw;
    text-align: center;
    border-bottom: 2px solid #f2f2f3;
    padding: 14px 0 8px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${theme.color.white};
  }
  ${theme.mediaQueries.whenDesktop} {
    .css-4duy2j-header {
      padding: 30px 0 24px;
      position: relative;
    }
  }
  .css-1vdppt3-logo {
    height: 20px;
  }
  ${theme.mediaQueries.whenDesktop} {
    .css-1vdppt3-logo {
      height: 49px;
    }
  }
  .css-rgxpu2-nav {
    display: none;
  }
  ${theme.mediaQueries.whenDesktop} {
    .css-rgxpu2-nav {
      display: block;
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
    }
  }
  .css-1t1j9fp-navItem {
    display: inline-block;
    margin: 0 10px;
  }
  .css-341ceg-navLink-activeNavLink-ProductHeader {
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'SZ Text', 'Georgia', 'Times', serif;
    font-weight: 400;
    font-size: 22px;
    color: #71737f;
    color: #29293a;
    font-weight: 700;
  }
  .css-341ceg-navLink-activeNavLink-ProductHeader:hover {
    color: #29293a;
    font-weight: 700;
  }
  .css-341ceg-navLink-activeNavLink-ProductHeader::before {
    display: block;
    content: attr(data-title);
    font-weight: 700;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
    display: block;
  }
  .css-fvji8-navLink {
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'SZ Text', 'Georgia', 'Times', serif;
    font-weight: 400;
    font-size: 22px;
    color: #71737f;
  }
  .css-fvji8-navLink:hover {
    color: #29293a;
    font-weight: 700;
  }
  .css-fvji8-navLink::before {
    display: block;
    content: attr(data-title);
    font-weight: 700;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
    display: block;
  }
`;

export default SzHeaderComponent;
