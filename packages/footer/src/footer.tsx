import React from 'react';
import CheckoutFooter from './checkoutFooter';
import DefaultFooter, { MenuOptions } from './defaultFooter';
import TrustfulSection from './trustfulSection';

type FullFooterProps = {
  className?: string;
  variant: 'full';
  googleToken: string;
  facebookToken: string;
  menuOptions?: MenuOptions;
  showEnvkv?: boolean;
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
          menuOptions={props.menuOptions}
          showEnvkv={props.showEnvkv}
        />
      );
  }
};

export default Footer;
