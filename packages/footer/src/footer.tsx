import * as React from 'react';
import CheckoutFooter from './checkoutFooter';
import DefaultFooter from './defaultFooter';
import TrustfulSection from './trustfulSection';

export interface FooterProps {
    className?: string;
  variant: string;
}

export const Footer: React.FC<FooterProps> = ({ className, variant }) => {
  switch (variant) {
    case 'checkout': {
      return <CheckoutFooter className={className} />;
    }
    default:
      return <DefaultFooter onTop={<TrustfulSection />} />;
  }
};

export default Footer;
