import React, { useEffect, useMemo } from 'react';
import CheckoutFooter from './checkoutFooter';
import DefaultFooter, { MenuOptions } from './defaultFooter';
import TrustfulSection from './trustfulSection';
import SzFooterContent from './szFooter';
import { trackingLogCustomEvent } from './helpers/tracking';

type ProductAbVariationType = boolean | string;

type FullFooterProps = {
  className?: string;
  variant: FooterVariant.full;
  googleToken: string;
  facebookToken: string;
  menuOptions?: MenuOptions;
  showEnvkv?: boolean;
  abTestFlagName?: string;
  abTestFlagValue?: ProductAbVariationType;
};

type MinimalFooterProps = {
  className?: string;
  variant: FooterVariant.minimal;
  abTestFlagName?: string;
  abTestFlagValue?: ProductAbVariationType;
};

type SZFooterProps = {
  className?: string;
  variant: FooterVariant.sz;
};

export enum FooterVariant {
  minimal = 'minimal',
  full = 'full',
  sz = 'sz'
}

export type FooterProps = FullFooterProps | MinimalFooterProps | SZFooterProps;

const Footer: React.FC<FooterProps> = props => {
  useEffect(() => {
    if (props.variant !== FooterVariant.sz && props.abTestFlagName) {
      trackingLogCustomEvent({
        event: 'assigned',
        schema: 'experiment',
        experiment: {
          id: 'AB-16',
          name: `${props.abTestFlagName}`,
          variant: `${props.abTestFlagValue}`,
          slot: 0
        }
      });
    }
  }, []);

  switch (props.variant) {
    case FooterVariant.minimal: {
      return <CheckoutFooter className={props.className} />;
    }
    case FooterVariant.sz: {
      return <SzFooterContent />;
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
