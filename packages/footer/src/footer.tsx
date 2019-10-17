import React from 'react';
import CheckoutFooter from './checkoutFooter';
import DefaultFooter from './defaultFooter';
import TrustfulSection from './trustfulSection';

export interface FooterProps {
  className?: string;
  variant?: 'minimal' | 'full';
}

export const Footer: React.FC<FooterProps> = ({ className, variant }) => {
  switch (variant) {
    case 'minimal': {
      return <CheckoutFooter className={className} />;
    }
    default:
      return <DefaultFooter className={className} onTop={<TrustfulSection />} />;
  }
};

export default Footer;
