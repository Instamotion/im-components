import React, { useMemo } from 'react';
import CheckoutFooter from './checkoutFooter';
import DefaultFooter, { MenuOptions } from './defaultFooter';
import TrustfulSection from './trustfulSection';
import TagManager from 'react-gtm-module';
import SzFooterContent from './szFooter';

const AB_TEST_VARIABLE_NAME: string = 'ab-test-product';

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

enum FooterVariant {
  minimal = 'minimal',
  full = 'full',
  sz = 'sz'
}

export type FooterProps = FullFooterProps | MinimalFooterProps | SZFooterProps;

const Footer: React.FC<FooterProps> = props => {
  if (typeof window !== 'undefined' && props.variant !== FooterVariant.sz && props.abTestFlagName) {
    const dataLayerArgs = useMemo(
      () => ({
        dataLayer: {
          [AB_TEST_VARIABLE_NAME]: `${props.abTestFlagName}-${props.abTestFlagValue || 'default'}`
        }
      }),
      [AB_TEST_VARIABLE_NAME, props.abTestFlagName, props.abTestFlagValue]
    );

    TagManager.dataLayer(dataLayerArgs);
  }

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
