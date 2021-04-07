import React, { useEffect } from 'react';
import OldFooter, { OldFooterProps } from './oldFooter/defaultFooter';
import {
  DefaultFooter as NewFooter,
  DefaultFooterProps as NewFooterProps
} from './newFooter/defaultFooter';
import TrustfulSection from './oldFooter/trustfulSection';
import SzFooterContent from './szFooter';
import { trackingLogCustomEvent } from './helpers/tracking';

type ProductAbVariationType = boolean | string;

type WrapProps = {
  className?: string;
  utmQuery?: string;
  variant: FooterVariant;
  abTestFlagName?: string;
  abTestFlagValue?: ProductAbVariationType;
};

type SZFooterProps = {
  className?: string;
  variant: FooterVariant.sz;
};

export enum FooterVariant {
  old = 'old',
  sz = 'sz',
  new = 'new'
}

export type FooterProps = (OldFooterProps | SZFooterProps | NewFooterProps) & WrapProps;

const Footer: React.FC<FooterProps> = props => {
  useEffect(() => {
    if (props.variant !== FooterVariant.sz && props.abTestFlagName) {
      trackingLogCustomEvent({
        event: 'assigned',
        schema: 'experiment',
        experiment: {
          id: 'UT-849',
          name: `${props.abTestFlagName}`,
          variant: `${props.abTestFlagValue}`,
          slot: 0
        }
      });
    }
  }, []);

  switch (props.variant) {
    case FooterVariant.sz: {
      return <SzFooterContent />;
    }
    case FooterVariant.old: {
      return (
        <OldFooter
          googleToken={props.googleToken}
          facebookToken={props.facebookToken}
          className={props.className}
          onTop={<TrustfulSection />}
          menuOptions={props.menuOptions}
          showEnvkv={props.showEnvkv}
        />
      );
    }
    case FooterVariant.new:
    default:
      return (
        <NewFooter
          utmQuery={props.utmQuery}
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
