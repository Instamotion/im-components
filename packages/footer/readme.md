# @im-ui/footer

Footer components for use on other pages.

## How to use:

```
npm install @im-ui/footer
```

## API

```
type FooterProps = FullFooterProps | MinimalFooterProps;

type FullFooterProps = {
  className?: string;
  variant: 'full';
  googleToken: string;
  facebookToken: string;
  menuOptions?: MenuOptions;
}

type MinimalFooterProps = {
  className?: string;
  variant: 'minimal';
}

type MenuOptions = {
  showFinancingLink?: boolean;
  showDeliveryLink?: boolean;
  showQualityLink?: boolean;
}
```

It has two variants:

- `minimal` : `<Footer variant='minimal' />`
- `full` : `<Footer variant='full' googleToken={googleToken} facebookToken={facebookToken} />`


## Required translations keys

For more details, check the `stories/locales.ts` file

```
checkout.footer.about_us
checkout.footer.agb
checkout.footer.imprint
checkout.footer.privacy
footer.privacy_settings
checkout.footer.faq
default.footer.newsletter.title
default.footer.newsletter.linkText
default.footer.newsletter.subtitle
default.footer.copyrights.text
default.footer.menu.automobile
default.footer.menu.brands
default.footer.menu.vehicle_types
default.footer.menu.gearbox
default.footer.menu.fuel_types
default.footer.menu.year
default.footer.menu.day_registrations
default.footer.menu.jahreswagen
default.footer.menu.to_dye
default.footer.menu.germany
default.footer.menu.instamotion
default.footer.menu.about_us
default.footer.menu.press
default.footer.menu.faq
default.footer.menu.how_it_works
default.footer.menu.blog
default.footer.menu.jobs
default.footer.legal
default.footer.imprint
default.footer.legal_notice
default.footer.conditions
default.footer.data_protection
default.footer.shipping_and_payment
default.footer.cancellation
default.footer.services
default.footer.warranty
default.footer.fold_us
default.footer.free_advice
default.footer.guide_funding
default.footer.guide_leasing
default.footer.advice_leasing
default.footer.financing
default.footer.delivery
default.footer.quality
```
