import React from 'react';
import CheckoutFooter from './checkoutFooter';
import DefaultFooter from './defaultFooter';
import TrustfulSection from './trustfulSection';

type FullFooterProps = {
  className?: string;
  variant: 'full';
  googleToken: string;
  facebookToken: string;
};

type MinimalFooterProps = {
  className?: string;
  variant: 'minimal';
};

export type FooterProps = FullFooterProps | MinimalFooterProps;

const Footer: React.FC<FooterProps> = props => {
  switch (props.variant) {
    case 'minimal': {
      return <CheckoutFooter className={props.className} />;
    }
    default:
      return (
        <DefaultFooter
          googleToken={props.googleToken}
          facebookToken={props.facebookToken}
          className={props.className}
          onTop={<TrustfulSection />}
        />
      );
  }
};

export default Footer;
