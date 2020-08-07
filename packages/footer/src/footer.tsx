import React, { useMemo } from 'react';
import CheckoutFooter from './checkoutFooter';
import DefaultFooter, { MenuOptions } from './defaultFooter';
import TrustfulSection from './trustfulSection';
import TagManager from 'react-gtm-module';

const AB_TEST_VARIABLE_NAME: string = 'ab-test-product';

type ProductAbVariationType = boolean | string;

type FullFooterProps = {
  className?: string;
  variant: 'full';
  googleToken: string;
  facebookToken: string;
  menuOptions?: MenuOptions;
  showEnvkv?: boolean;
  abTestFlagName?: string;
  abTestFlagValue?: ProductAbVariationType;
};

type MinimalFooterProps = {
  className?: string;
  variant: 'minimal';
  abTestFlagName?: string;
  abTestFlagValue?: ProductAbVariationType;
};

export type FooterProps = FullFooterProps | MinimalFooterProps;

const Footer: React.FC<FooterProps> = props => {
  if (typeof window !== 'undefined' && props.abTestFlagName) {
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
