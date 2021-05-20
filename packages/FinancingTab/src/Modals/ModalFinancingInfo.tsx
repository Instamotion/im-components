import React from 'react';
import styled from 'styled-components';

import { ModalCloseButton } from '@im-ui/modal';
import Icon from '@im-ui/icon';
import { IMTheme as theme } from '@im-ui/theme';
import { IMButton as Button } from '@im-ui/button';

interface ModalData {
  effectiveInterestRate: number;
  nominalInterestRate: number;
  netLoanAmount: number;
  totalAmount: number;
  balloonAmount: number | null;
}

interface ModalFinancingInfoProps {
  modalData: ModalData;
  closeModal: () => void;
}

export const ModalFinancingInfo = ({ modalData, closeModal }: ModalFinancingInfoProps) => {
  const StyledIcon = styled(Icon)`
    height: 2rem;
    fill: none;
  `;

  const Wrapper = styled.div`
    padding: 2rem 1rem;
    color: ${theme.color.typo};
    text-align: left;
    line-height: 1.5rem;
    font-family: ${theme.font.bentonRegular.family};

    h2 {
      margin: 0;
      padding: 1rem 0 1rem;
      font-size: 1rem;
      text-transform: uppercase;
      color: ${theme.color.oil};
    }

    p {
      margin: 0;
      padding: 0;
    }

    > div {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 1rem;
      text-align: center;
    }

    button {
      width: 100%;
    }

    ${theme.mediaQueries.whenDesktop} {
      padding: 2rem;
      width: 37.5rem;
      max-height: calc(100vh - 8rem);

      h2 {
        margin: 0;
        padding: 0.25rem 0 1rem;
        font-size: 1.5rem;
        text-align: center;
        border-bottom: 1px solid ${theme.color.primary};
      }

      p {
        padding: 1.5rem 0;
      }

      > div {
        position: static;
        padding: 0;
      }

      button {
        width: 17.5rem;
      }
    }
  `;

  const StyledButton = styled(Button as any)`
    color: ${theme.color.white};
    width: 100%;
    margin: 0 auto;
    ${theme.mediaQueries.whenDesktop} {
      width: 17.5rem;
    }
  `;

  return (
    <>
      <ModalCloseButton onClick={closeModal}>
        <StyledIcon icon="modalClose" />
      </ModalCloseButton>
      <Wrapper>
        <h2>Einzelheiten</h2>
        <p>
          Effektiver Jahreszins: {modalData.effectiveInterestRate}%, Sollzinssatz (p. a. gebunden
          für die gesamte Laufzeit): {modalData.nominalInterestRate}%, Nettodarlehensbetrag:
          {' ' + modalData.netLoanAmount} inkl. Zulassungs- und Zustellkosten (449,00 €),
          Schlussrate:
          {' ' + modalData.balloonAmount}, Gesamtrückzahlungsbetrag:
          {' ' + modalData.totalAmount}. Hierbei handelt es sich um ein repräsentatives Beispiel
          gem. § 6a PAngV. Ein freibleibendes Angebot der Bank11 für Privatkunden und Handel GmbH,
          Hammer Landstraße 91, 41460 Neuss für die das Autohaus Instamotion Retail GmbH,
          Erika-Mann-Straße 23, 80636 München als ungebundener Vermittler beratend tätig ist. Bitte
          beachte, dass wir eine Bonitäts-Anfrage stellen werden. Alle Preise verstehen sich inkl.
          MwSt. Irrtümer vorbehalten.
        </p>
        <div>
          <StyledButton buttonType="primary" onClick={closeModal}>
            OK
          </StyledButton>
        </div>
      </Wrapper>
    </>
  );
};

export default ModalFinancingInfo;
