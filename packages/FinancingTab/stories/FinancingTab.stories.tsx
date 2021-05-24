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
      price: 6114
    },

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
    },

    featureFlags: {
      'content-box-radio-schlussrate': true,
      'schlussrate-read-only': true
    },
    isAnzahlungError: false
  };

  const modalData = {
    effectiveInterestRate: props.terms.effectiveInterestRate,
    nominalInterestRate: props.terms.nominalInterestRate,
    netLoanAmount: props.terms.netLoanAmount,
    totalAmount: props.terms.totalAmount,
    balloonAmount: props.balloonAmount
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
