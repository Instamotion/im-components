import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import messages from '../utils/locales';
import Modal from 'react-modal';
import FinancingTab, { ModalFinancingPackagesInfo, ModalFinancingInfo } from '../src';
import { ModalStyle } from '@im-ui/modal';
import { IMTheme as theme } from '@im-ui/theme';

storiesOf('Financing Tab', module).add('Default', () => {
  const props = {
    carDetails: {
      __typename: 'Offer',
      isTopOffer: false,
      offerID: 'Z8MF1WS25FYPB6VU33CPPC1ZH77CMZC4PA37CQ9HP6SQQCR2UY7FJWF35',
      make: 'Seat',
      model: 'Mii',
      mileage: 61728,
      power: 44,
      firstRegistration: '01.2017',
      fuel: 'PETROL',
      consumptionUnit: 'LITER',
      consumptionCombined: 4.5,
      co2: 107,
      price: 6114,
      image:
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_01.jpg',
      images: [
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_01.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_02.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_03.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_04.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_05.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_06.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_07.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_08.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_09.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_10.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_11.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_12.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_13.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_14.jpg',
        'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/1fde1b76c16be491c1392dfd846151dd/image_15.jpg'
      ],
      monthlyInstallment: 37,
      gearbox: 'MANUAL_GEAR',
      condition: 'USED',
      variant: 'Mii Style 1.0 Klima eFH Tempom. Easy-Entry Servo PDC ZV+Funk',
      variants: null,
      vehicleId: 'IM17-0020868:305119',
      numberOfPreviousOwners: 1,
      cubicCapacity: 999,
      exteriorColor: 'WHITE',
      interiorType: 'FABRIC',
      interiorColor: 'BLACK',
      emissionClass: 'EURO6',
      consumptionOuter: 3.9,
      consumptionInner: 5.6,
      energyEfficiencyClass: null,
      internalNumber: '305119',
      description:
        '* **Getriebe:** Schaltgetriebe\\\\* **Technik:** Bordcomputer\\\\* **Assistenten:** Berganfahrassistent\\\\* **Komfort:** Klimaanlage, Servolenkung, Zentralverriegelung, Elektrischer Fensterheber, Teilbare Ruecksitzlehne, Tempomat, Park Distance Control, Innenraumfilter, Lenksaeule einstellbar\\\\* **Sicht:** Tagfahrlicht\\\\* **Sicherheit:** ABS, Airbag, Beifahrer-Airbag, Wegfahrsperre, Seitenairbags, ESP, Reifendruckkontrolle, Traktionskontrolle, Kindersitzbefestigung, Pannenkit\\\\* **Entertainment:** Soundsystem, Radio\\\\* **Umwelt:** Abgasnorm Euro 6, Grüne Umweltplakette\\\\* **Qualität:** Garantie, Scheckheftgepflegt\\\\* **Sonstiges:** Katalysator, Gepaeckraumabdeckung, Stossfaenger in Wagenfarbe\\\\* **Weiteres:** 12V-Steckdose, Audiosystem SEAT Sound-System 3.0 mit Touchscreen-Farbdisplay, Berg-Anfahr-Assistent (Hill-Holder), Bremsassistent, Candy Weiss, Comfort-Drive-Paket (1), Drehzahlmesser, Einstiegshilfe Easy-Entry mit Memoryfunktion, Elektrik-Paket, Elektron. Stabilitäts-Programm, elektronische Schlupfregulierung (ESR), Euro 6, Gurtstraffer, Handschuhfach mit Klappe, Heckscheibe heizbar, Heckscheibenwischer, Isofix-Aufnahmen für Kindersitz, Lautsprecher vorn, Radiovorbereitung, Rücksitzbank klappbar und teilbar, Servotronic, Sitz-Paket, Sportlenkrad, Tagfahrlicht, ZV mit Fernbedienung, eletr. Fensterheber vorn, Multifunktionsanzeige, Einparkhilfe hinten, Tempomat, Klimaanlage, Sitz vorn links höhenverstellbar\\\\* ... Änderungen, Zwischenverkauf und Irrtümer vorbehalten.\\\\ quality by ',
      category: 'Limousine',
      vin: 'VSSZZZAAZHD305119',
      vatRate: 19,
      supplier: 'IM17-0020868',
      topOfferDiscount: null,
      deliveryTime: null,
      cms: null
    },

    state: {
      withBalloonRate: true,
      downPayment: 1313,
      maxDownPayment: 6114,
      months: 60,
      balloonAmount: null,
      minBalloonAmount: 0,
      maxBalloonAmount: 0,
      monthlyInstallment: 36,
      totalPrice: 6563,
      totalAdditionalCosts: 449,
      terms: {
        __typename: 'FinancingTerms',
        effectiveInterestRate: 3.99,
        nominalInterestRate: 3.91884045058788,
        netLoanAmount: 5250,
        totalAmount: 6174.23,
        finalInstallment: 4003.43
      }
    },
    featureFlags: {
      'advanced-filters': true,
      'advanced-filters-2': true,
      'ca-112-homepage-video': true,
      'ca-231-sf-chat-toggle': true,
      canonicals: true,
      'car-recommender-pdp': true,
      checkout: true,
      'content-box-radio-schlussrate': true,
      'create-salesforce-lead-source': 'showroom',
      'default-sorting-order-newest-first': false,
      'email-request-description-enabled': true,
      'floating-saved-search': true,
      'hide-callback-time-selector-contact-form': false,
      'image-count': true,
      'images-lazy-loading-disabled': false,
      'lead-creation-transport': 'showroom',
      'new-car-details-accordion': false,
      'new-checkout-pages': true,
      'new-home': false,
      'new-pdp': false,
      'new-pdp-barpreis-swap': true,
      'new-pdp-chat-toggle': true,
      'new-pdp-enable-checkout': true,
      'pref-contact-channel-checkout': true,
      'preferred-contact-channel-contactform': true,
      'proceed-to-sofa-strecke-on-checkout': true,
      'promotion-home-herobubble': false,
      'promotion-tile-list-page': false,
      'review-tile-button-go-to-landing': true,
      'ro-143-highlight-top-offer-tiles': false,
      'ro-149-highlight-top-offer-filter': true,
      'ro-157-monthly-installment': false,
      'rt-246-rt-292-delivery': true,
      'rt-246-rt-292-financing': true,
      'rt-246-rt-292-quality': true,
      'rt-262-enable-save-search': true,
      'rt-30-serp-top-offer-positioning': true,
      'rt-457-show-date-published-sorting': true,
      'rt-5-implement-variant-search-field': true,
      'rt-508-car-recommender': true,
      savesearch: true,
      'schlussrate-read-only': true,
      'sd-3013-homepage-category-links': true,
      'sd-3363-homepage-carousel': false,
      'show-original-photos': 'show',
      'soft-lead-banner-pdp': true,
      'trade-in-option': true,
      'trade-in-option-checkout': true
    },
    isAnzahlungError: false
  };

  const modalData = {
    effectiveInterestRate: 1,
    nominalInterestRate: 2,
    netLoanAmount: 3,
    totalAmount: 4,
    balloonAmount: 5
  };

  const [calculatorIsOpen, setCalculatorIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [packagesInfoModalIsOpen, setPackagesInfoModalIsOpen] = useState(false);
  const [financialInfoModalIsOpen, setFinancialInfoModalIsOpen] = useState(false);

  const closeAllModals = () => {
    setModalIsOpen(false);
    setPackagesInfoModalIsOpen(false);
  };

  const openFinancingPackagesInfoModal = () => {
    closeAllModals();
    setModalIsOpen(true);
    setPackagesInfoModalIsOpen(true);
  };

  const openFinancialInfoModal = () => {
    closeAllModals();
    setModalIsOpen(true);
    setFinancialInfoModalIsOpen(true);
  };

  return renderWithThemeAndI18n(
    <>
      <FinancingTab
        {...props}
        onChangeBalloonRate={() => console.log('onChangeBalloonRate triggered')}
        onChangeDownPayment={() => console.log('onChangeDownPayment triggered')}
        onChangeWithBalloonRate={() => console.log('onChangeWithBalloonRate triggered')}
        onChangeMonths={() => console.log('onChangeMonths triggered')}
        openFinancingPackagesInfoModal={openFinancingPackagesInfoModal}
        openFinancialInfoModal={openFinancialInfoModal}
        // optional props, it will default to PDP configuration if nothing is set:
        showFinancingAdjust={true}
        calculatorIsOpen={calculatorIsOpen}
        onChangeCalulatorIsOpen={() => setCalculatorIsOpen(calculatorIsOpen => !calculatorIsOpen)}
        monthlyRateColor={theme.color.secondary}
      />
      <Modal isOpen={modalIsOpen}>
        <ModalStyle />
        {packagesInfoModalIsOpen && <ModalFinancingPackagesInfo closeModal={closeAllModals} />}
        {financialInfoModalIsOpen && (
          <ModalFinancingInfo closeModal={closeAllModals} modalData={modalData} />
        )}
      </Modal>
    </>,
    'de',
    messages
  );
});
