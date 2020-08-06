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
  productAbToggleVariable?: string;
  originalPhotosVariation?: ProductAbVariationType;
};

type MinimalFooterProps = {
  className?: string;
  variant: 'minimal';
  productAbToggleVariable?: string;
  originalPhotosVariation?: ProductAbVariationType;
};

export type FooterProps = FullFooterProps | MinimalFooterProps;

const Footer: React.FC<FooterProps> = props => {
  if (typeof window !== 'undefined' && props.productAbToggleVariable) {
    const productTestVariation: ProductAbVariationType = useMemo(
      () => props.originalPhotosVariation || 'default',
      [props.originalPhotosVariation]
    );

    const dataLayerArgs = useMemo(
      () => ({
        dataLayer: {
          [AB_TEST_VARIABLE_NAME]: `${props.productAbToggleVariable}-${productTestVariation}`
        }
      }),
      [AB_TEST_VARIABLE_NAME, props.productAbToggleVariable, productTestVariation]
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
