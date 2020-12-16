import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

interface Props {
  className?: string;
}

const handleClickPrivacySettings = (e: any) => {
  e.preventDefault();
  const cookieOpenBttn = document.getElementsByClassName(
    'ot-floating-button__open'
  )[0] as HTMLButtonElement;
  cookieOpenBttn.click();
};

export const FooterComponent: React.FC<Props> = ({ className }) => (
  <footer className={className}>
    <a href="https://www.instamotion.com/ueber-uns" target="_blank" rel="noopener noreferrer">
      <FormattedMessage id="checkout.footer.about_us" />
    </a>
    <a href="https://www.instamotion.com/agb" target="_blank" rel="noopener noreferrer">
      <FormattedMessage id="checkout.footer.agb" />
    </a>
    <a href="https://www.instamotion.com/impressum" target="_blank" rel="noopener noreferrer">
      <FormattedMessage id="checkout.footer.imprint" />
    </a>
    <a href="https://www.instamotion.com/datenschutz" target="_blank" rel="noopener noreferrer">
      <FormattedMessage id="checkout.footer.privacy" />
    </a>
    <a href="#" onClick={handleClickPrivacySettings}>
      <FormattedMessage id="checkout.footer.privacy_settings" />
    </a>
    <a href="https://www.instamotion.com/faq" target="_blank" rel="noopener noreferrer">
      <FormattedMessage id="checkout.footer.faq" />
    </a>
  </footer>
);

const Footer = styled(FooterComponent)`
  border-top: solid 1px #979797;
  margin-top: 3rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  & a {
    text-decoration: none;
    color: #979797;
  }
`;

export default Footer;
