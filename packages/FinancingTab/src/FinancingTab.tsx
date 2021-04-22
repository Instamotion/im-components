import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Label from '@im-ui/label';
import Toggle from '@im-ui/toggle';
import MonthlyRateChooser from './MonthlyRateChooser';
import CurrencyInput from './ContentBoxRadio/CurrencyInput';
import ContentBoxRadioButtonGroup from './ContentBoxRadio/ContentBoxRadioButtonGroup';

function isNil<A>(x: A | null | undefined): boolean {
  return x === null || x === undefined;
}

export const formatCurrency = (x: number | undefined): string => `${x.toLocaleString('de-de')} €`;

type FeatureFlagsType = {
  'schlussrate-read-only': boolean;
  'content-box-radio-schlussrate': boolean;
};
/**
 * The "initial" data that is passed from the "outside"
 */
type Props = {
  /**
   * Tab state
   */
  state: FinancingTabState;
  /**
   * Offer that represents the car
   */
  offer: Offer;
  featureFlags: FeatureFlagsType;
  isAnzahlungError: boolean;
  onChangeWithBalloonRate: (withBallonRate: boolean) => void;
  onChangeMonths: (month: number) => void;
  onChangeBalloonRate: (ballon: number) => void;
  onChangeDownPaynment: (downPayment: number) => void;
  openFinancingPackagesInfoModal: () => void;
};

const getMinMaxLabel = (label: string, min?: number, max?: number): string => {
  let parts = [label];
  if (!isNil(min) || !isNil(max)) {
    parts.push(' (');
  }
  if (!isNil(min)) {
    parts.push(`min: ${formatCurrency(min)}`);
  }
  if (!isNil(max)) {
    if (!isNil(min)) {
      parts.push('; ');
    }
    parts.push(`max: ${formatCurrency(max)}`);
  }
  if (!isNil(min) || !isNil(max)) {
    parts.push(')');
  }
  return parts.join('');
};

const Col = styled.div`
  flex: 1;
`;

const FinancingTabWrap = styled.div`
  flex: 50%;
`;

export interface IMonthsSelection {
  label: string;
  value: number;
  disabled?: boolean;
}

type FinancingTabState = {
  withBalloonRate: boolean;
  downPayment: number;
  maxDownPayment: number;
  months: number;
  balloonAmount: number | null;
  minBalloonAmount: number | undefined;
  maxBalloonAmount: number | undefined;
  monthlyInstallment: number;
  totalPrice: number;
  totalAdditionalCosts: number;
  terms: {
    effectiveInterestRate: number;
    nominalInterestRate: number;
    netLoanAmount: number;
    totalAmount: number;
    finalInstallment: number;
  };
  openFinancialInfoModal?: () => void;
};

interface Offer {
  price: number;
}

const getMonthsSelection = (withBalloon: boolean): IMonthsSelection[] => {
  return [
    { label: '12', value: 12 },
    { label: '24', value: 24 },
    { label: '36', value: 36 },
    { label: '48', value: 48 },
    { label: '60', value: 60 },
    { label: '72', value: 72, disabled: withBalloon },
    { label: '84', value: 84, disabled: withBalloon },
    { label: '96', value: 96, disabled: withBalloon }
  ];
};

type CalculatorProps = {
  carPrice: number;
  state: FinancingTabState;
  isSchlussrateReadOnly: boolean;
  isContentBoxRadioSchlussrateOn: boolean;
  isAnzahlungError: boolean;
  onChangeWithBalloonRate: (withBalloonRate: boolean) => void;
  onChangeDownPayment: (downPayment: number) => void;
  onChangeMonths: (months: number) => void;
  onChangeBalloonRate: (balloonAmount: number) => void;
  openFinancingPackagesInfoModal: () => void;
};

const Calculator = (props: CalculatorProps) => {
  const CalculatorPane = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: start;

    label {
      display: block;
      margin: 0 0 0.4rem !important;
    }

    > div {
      padding-bottom: 1.5rem;
    }

    #schlussrate label span {
      text-transform: none;
      font-weight: normal;
      font-size: 1rem;
    }

    ${theme.mediaQueries.whenDesktop} {
      > div {
        padding-bottom: 2rem;
      }
      > div:first-child {
        padding-bottom: 0.2rem;
      }
      > div:nth-last-child {
        padding-bottom: 0;
      }
    }
  `;

  const LineBreak = styled.span`
    display: none;
    ${theme.mediaQueries.whenDesktop} {
      display: block;
      height: 0.125rem;
      background: #f3f3f3;
      margin-bottom: 1.5rem;
    }
  `;

  const StyledLabel = styled(Label)`
    font-family: ${theme.font.bentonBold.family} !important;
    font-weight: bold !important;
    font-size: 1em !important;
    line-height: 1.625rem !important;
    text-transform: capitalize !important;
    color: ${theme.color.typo} !important;
  `;

  const StyledLink = styled.span`
    font-family: ${theme.font.bentonBold.family};
    font-weight: ${theme.font.bentonBold.weight};
    font-size: 1em;
    line-height: 1.625rem;
    text-transform: initial;
    color: ${theme.color.typo};
    text-decoration: underline;
    padding-bottom: 2rem;
    cursor: pointer;
    width: fit-content;
    ${theme.mediaQueries.whenDesktop} {
      padding-bottom: 1rem;
    }
  `;

  const schlussRateLabel = () => {
    if (!props.isSchlussrateReadOnly) {
      if (props?.state?.withBalloonRate) {
        return getMinMaxLabel(
          'Schlussrate',
          props.state.minBalloonAmount,
          props.state.maxBalloonAmount
        );
      }
    } else {
      return 'Schlussrate';
    }
  };

  const ToggleWrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
  `;

  return (
    <CalculatorPane>
      {props.isContentBoxRadioSchlussrateOn ? (
        <>
          <ContentBoxRadioButtonGroup
            radioButtons={[
              { label: 'EasyGo', value: 'easygo' },
              { label: 'Classic', value: 'classic' }
            ]}
            selected={props?.state?.withBalloonRate ? 'easygo' : 'classic'}
            onChange={selected =>
              selected === 'easygo'
                ? props.onChangeWithBalloonRate(true)
                : props.onChangeWithBalloonRate(false)
            }
          />
          <StyledLink onClick={props.openFinancingPackagesInfoModal}>
            Mehr zu Finanzierungsarten
          </StyledLink>
        </>
      ) : (
        <ToggleWrapper>
          <Toggle
            id="schlussrate"
            label="mit Schlussrate"
            checked={props?.state?.withBalloonRate}
            fullWidth={true}
            onChange={props?.onChangeWithBalloonRate}
          />
        </ToggleWrapper>
      )}

      <LineBreak />

      <div>
        <StyledLabel text={getMinMaxLabel('Anzahlung')} />
        <CurrencyInput
          onChange={props?.onChangeDownPayment}
          value={props?.state?.downPayment}
          max={props?.carPrice}
          {...(props?.state?.downPayment > 0
            ? { onCrossClick: () => props?.onChangeDownPayment(0) }
            : {})}
          sign={'€'}
          invalid={props?.isAnzahlungError}
        />
      </div>
      <div>
        <StyledLabel
          disabled={!!props?.isSchlussrateReadOnly || !props?.state?.withBalloonRate}
          text={schlussRateLabel() ?? ''}
        />
        <CurrencyInput
          onChange={props.onChangeBalloonRate}
          value={props?.state?.withBalloonRate ? props?.state?.balloonAmount || 0 : 0}
          max={props?.state?.maxBalloonAmount}
          min={props?.state?.minBalloonAmount}
          sign={'€'}
          onCrossClick={() => props.onChangeBalloonRate(props?.state?.minBalloonAmount ?? 0)}
          disabled={!!props?.isSchlussrateReadOnly || !props?.state?.withBalloonRate}
        />
      </div>
      <span>
        <StyledLabel text="Monatsraten" />
        <MonthlyRateChooser
          selected={props?.state?.months}
          onChange={months => props.onChangeMonths(months)}
          items={getMonthsSelection(props?.state?.withBalloonRate)}
        />
      </span>
    </CalculatorPane>
  );
};

const FinancingTabContainer = styled.div`
  display: flex;
  background-color: ${theme.color.white};
`;

const TabPanel = styled.div`
  padding: 0rem 1.5rem;
  ${theme.mediaQueries.whenDesktop} {
    padding: unset;
  }
`;

const FinancingTab = (props: Props) => {
  const {
    state,
    offer,
    featureFlags,
    isAnzahlungError,
    openFinancingPackagesInfoModal,
    onChangeWithBalloonRate,
    onChangeMonths,
    onChangeBalloonRate,
    onChangeDownPaynment
  } = props;

  const isSchlussrateReadOnly = useMemo(() => !!featureFlags['schlussrate-read-only'], [
    featureFlags
  ]);

  const isContentBoxRadioSchlussrateOn = useMemo(
    () => !!featureFlags['content-box-radio-schlussrate'],
    [featureFlags]
  );

  return (
    <TabPanel>
      <FinancingTabContainer>
        <FinancingTabWrap>
          <Calculator
            carPrice={offer?.price ?? 0}
            state={state}
            isSchlussrateReadOnly={isSchlussrateReadOnly}
            isContentBoxRadioSchlussrateOn={isContentBoxRadioSchlussrateOn}
            isAnzahlungError={isAnzahlungError}
            openFinancingPackagesInfoModal={openFinancingPackagesInfoModal}
            onChangeWithBalloonRate={onChangeWithBalloonRate}
            onChangeMonths={onChangeMonths}
            onChangeBalloonRate={onChangeBalloonRate}
            onChangeDownPayment={onChangeDownPaynment}
          />
        </FinancingTabWrap>
      </FinancingTabContainer>
    </TabPanel>
  );
};

export default FinancingTab;
