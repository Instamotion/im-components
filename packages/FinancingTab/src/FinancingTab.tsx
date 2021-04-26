import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import Toggle from '@im-ui/toggle';
import { CurrencyInput } from '@im-ui/input';
import MonthlyRateChooser from './MonthlyRateChooser';
import ContentBoxRadioButtonGroup from './ContentBoxRadio/ContentBoxRadioButtonGroup';
import {
  FinancingTabContainer,
  TabPanel,
  ToggleWrapper,
  LineBreak,
  StyledLabel,
  StyledLink,
  CalculatorPane,
  FinancingTabWrap
} from './styles';

function isNil<A>(x: A | null | undefined): boolean {
  return x === null || x === undefined;
}

export const formatCurrency = (x: number | undefined): string =>
  `${x != undefined && x.toLocaleString('de-de')} €`;

type FeatureFlagsType = {
  'schlussrate-read-only': boolean;
  'content-box-radio-schlussrate': boolean;
};
/**
 * The "initial" data that is passed from the "outside"
 */
export type Props = {
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

const getMinMaxLabel = (label: string = '', min?: number, max?: number): string => {
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

export type CalculatorProps = {
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
  const schlussRateLabel = () => {
    if (!props.isSchlussrateReadOnly) {
      if (props?.state?.withBalloonRate) {
        return (
          <FormattedMessage
            id="default.financing_tab.final_installment"
            values={{
              minMax: getMinMaxLabel('', props.state.minBalloonAmount, props.state.maxBalloonAmount)
            }}
          />
        );
      }
    } else {
      return (
        <FormattedMessage
          id="default.financing_tab.final_installment"
          values={{
            minMax: ''
          }}
        />
      );
    }
  };

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
            <FormattedMessage id="default.financing_tab.more_financing_info" />
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
        <StyledLabel
          text={
            <FormattedMessage
              id="default.financing_tab.deposit"
              values={{ minMax: getMinMaxLabel() }}
            />
          }
        />
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
        <StyledLabel text={<FormattedMessage id="default.financing_tab.monthly_rates" />} />
        <MonthlyRateChooser
          selected={props?.state?.months}
          onChange={months => props.onChangeMonths(months)}
          items={getMonthsSelection(props?.state?.withBalloonRate)}
        />
      </span>
    </CalculatorPane>
  );
};

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
