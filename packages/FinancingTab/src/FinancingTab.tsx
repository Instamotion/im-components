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
  FinancingTabWrap,
  AdjustFinancingWrapper,
  AdjustFinancingTitle,
  AdjustFinancingDivider,
  AdjustFinancingLink,
  AdjustFinancingRight,
  AdjustLineBreak,
  FinancingCalcPane
} from './styles';

export const formatCurrency = (x: number | undefined): string =>
  `${x != undefined && x.toLocaleString('de-de')} €`;

export type FeatureFlagsType = {
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
  withBalloonRate: boolean;
  downPayment: number;
  maxDownPayment: number;
  months: number;
  balloonAmount: number;
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
  /**
   * CarDetails that represents the car
   */
  showCalculatorSummary?: boolean;
  calculatorIsOpen?: boolean;
  onChangeCalulatorIsOpen?: () => void;
  monthlyRateColor?: string;
  carDetails: CarDetails;
  featureFlags?: FeatureFlagsType;
  isAnzahlungError: boolean;
  onChangeWithBalloonRate: (withBallonRate: boolean) => void;
  onChangeMonths: (month: number) => void;
  onChangeBalloonRate: (ballon: number) => void;
  onChangeDownPayment: (downPayment: number) => void;
  openFinancingPackagesInfoModal: () => void;
  openFinancialInfoModal?: () => void;
};

const FeatureFlagsDefault: FeatureFlagsType = {
  'schlussrate-read-only': false,
  'content-box-radio-schlussrate': false
};

const getMinMaxLabel = (label: string = '', min?: number, max?: number): string => {
  if (min || max) {
    const minLabel = min ? `min: ${formatCurrency(min)}` : '';
    const maxLabel = max ? `max: ${formatCurrency(max)}` : '';
    return `${label} (${minLabel}${min && max ? '; ' : ''}${maxLabel})`;
  }
  return label;
};

export interface IMonthsSelection {
  label: string;
  value: number;
  disabled?: boolean;
}

interface CarDetails {
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

const RadioEnum = {
  easygo: 'easygo',
  classic: 'classic'
};

export type CalculatorProps = {
  showCalculatorSummary: boolean;
  calculatorIsOpen: boolean;
  onChangeCalulatorIsOpen?: () => void;
  monthlyRateColor?: string;
  carPrice: number;
  isSchlussrateReadOnly: boolean;
  isContentBoxRadioSchlussrateOn: boolean;
  isAnzahlungError: boolean;
  withBalloonRate: boolean;
  downPayment: number;
  months: number;
  balloonAmount: number;
  minBalloonAmount: number | undefined;
  maxBalloonAmount: number | undefined;
  monthlyInstallment: number;
  onChangeWithBalloonRate: (withBalloonRate: boolean) => void;
  onChangeDownPayment: (downPayment: number) => void;
  onChangeMonths: (months: number) => void;
  onChangeBalloonRate: (balloonAmount: number) => void;
  openFinancingPackagesInfoModal: () => void;
  openFinancialInfoModal?: () => void;
};

const Calculator: React.FC<CalculatorProps> = ({
  showCalculatorSummary,
  calculatorIsOpen,
  onChangeCalulatorIsOpen,
  monthlyRateColor,
  carPrice,
  isSchlussrateReadOnly,
  isContentBoxRadioSchlussrateOn,
  isAnzahlungError,
  withBalloonRate,
  downPayment,
  months,
  monthlyInstallment,
  balloonAmount,
  minBalloonAmount,
  maxBalloonAmount,
  onChangeWithBalloonRate,
  onChangeDownPayment,
  onChangeMonths,
  onChangeBalloonRate,
  openFinancingPackagesInfoModal,
  openFinancialInfoModal
}) => {
  const schlussRateLabel = () => {
    if (!isSchlussrateReadOnly) {
      if (withBalloonRate) {
        return (
          <FormattedMessage
            id="default.financing_tab.final_installment"
            values={{
              minMax: getMinMaxLabel('', minBalloonAmount, maxBalloonAmount)
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
    return '';
  };

  return (
    <CalculatorPane>
      <FinancingCalcPane open={calculatorIsOpen}>
        {isContentBoxRadioSchlussrateOn ? (
          <>
            <ContentBoxRadioButtonGroup
              radioButtons={[
                { label: 'EasyGo', value: RadioEnum.easygo },
                { label: 'Classic', value: RadioEnum.classic }
              ]}
              selected={withBalloonRate ? RadioEnum.easygo : RadioEnum.classic}
              onChange={selected => onChangeWithBalloonRate(selected === RadioEnum.easygo)}
            />
            <StyledLink onClick={openFinancingPackagesInfoModal}>
              <FormattedMessage id="default.financing_tab.more_financing_info" />
            </StyledLink>
          </>
        ) : (
          <ToggleWrapper>
            <Toggle
              id="schlussrate"
              label="mit Schlussrate"
              checked={withBalloonRate}
              fullWidth={true}
              onChange={onChangeWithBalloonRate}
            />
          </ToggleWrapper>
        )}

        <AdjustLineBreak top={false} />

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
            onChange={onChangeDownPayment}
            value={downPayment}
            max={carPrice}
            {...(downPayment > 0 ? { onCrossClick: () => onChangeDownPayment(0) } : {})}
            sign={'€'}
            invalid={isAnzahlungError}
          />
        </div>
        <div>
          <StyledLabel
            disabled={!!isSchlussrateReadOnly || !withBalloonRate}
            text={schlussRateLabel()}
          />
          <CurrencyInput
            onChange={onChangeBalloonRate}
            value={withBalloonRate ? balloonAmount : 0}
            max={maxBalloonAmount}
            min={minBalloonAmount}
            sign={'€'}
            onCrossClick={() => onChangeBalloonRate(minBalloonAmount ?? 0)}
            disabled={!!isSchlussrateReadOnly || !withBalloonRate}
          />
        </div>
        <span>
          <StyledLabel text={<FormattedMessage id="default.financing_tab.monthly_rates" />} />
          <MonthlyRateChooser
            color={monthlyRateColor}
            selected={months}
            onChange={months => onChangeMonths(months)}
            items={getMonthsSelection(withBalloonRate)}
          />
        </span>
      </FinancingCalcPane>

      {showCalculatorSummary && (
        <>
          <AdjustLineBreak top={true} />
          <AdjustFinancingWrapper>
            <div>
              <AdjustFinancingTitle>
                <FormattedMessage
                  id="default.financing_tab.rates"
                  values={{
                    rates: months
                  }}
                />
              </AdjustFinancingTitle>

              <AdjustFinancingLink onClick={onChangeCalulatorIsOpen}>
                {!calculatorIsOpen ? (
                  <FormattedMessage id="default.financing_tab.adjust_financing" />
                ) : (
                  <FormattedMessage id="default.financing_tab.reset_financing" />
                )}
              </AdjustFinancingLink>
            </div>
            <AdjustFinancingDivider />
            <AdjustFinancingRight>
              <AdjustFinancingTitle>
                <FormattedMessage
                  id="default.financing_tab.monthly_rate"
                  values={{
                    rate: monthlyInstallment
                  }}
                />
              </AdjustFinancingTitle>
              <AdjustFinancingLink onClick={openFinancialInfoModal}>
                <FormattedMessage id="default.financing_tab.details" />
              </AdjustFinancingLink>
            </AdjustFinancingRight>
          </AdjustFinancingWrapper>
          <AdjustLineBreak top={false} />
        </>
      )}
    </CalculatorPane>
  );
};

const FinancingTab: React.FC<Props> = ({
  showCalculatorSummary = false,
  calculatorIsOpen = true,
  onChangeCalulatorIsOpen,
  monthlyRateColor,
  balloonAmount = 0,
  withBalloonRate,
  downPayment,
  maxBalloonAmount,
  minBalloonAmount,
  months,
  monthlyInstallment,
  carDetails,
  featureFlags = FeatureFlagsDefault,
  isAnzahlungError,
  openFinancingPackagesInfoModal,
  openFinancialInfoModal,
  onChangeWithBalloonRate,
  onChangeMonths,
  onChangeBalloonRate,
  onChangeDownPayment
}) => {
  const isSchlussrateReadOnly = useMemo(() => !!featureFlags['schlussrate-read-only'], [
    featureFlags
  ]);

  const isContentBoxRadioSchlussrateOn = useMemo(
    () => !!featureFlags['content-box-radio-schlussrate'],
    [featureFlags]
  );

  const { price = 0 } = carDetails;

  return (
    <TabPanel>
      <FinancingTabContainer>
        <FinancingTabWrap>
          <Calculator
            showCalculatorSummary={showCalculatorSummary}
            calculatorIsOpen={calculatorIsOpen}
            onChangeCalulatorIsOpen={onChangeCalulatorIsOpen}
            monthlyRateColor={monthlyRateColor}
            carPrice={price}
            balloonAmount={balloonAmount}
            withBalloonRate={withBalloonRate}
            downPayment={downPayment}
            maxBalloonAmount={maxBalloonAmount}
            minBalloonAmount={minBalloonAmount}
            months={months}
            monthlyInstallment={monthlyInstallment}
            isSchlussrateReadOnly={isSchlussrateReadOnly}
            isContentBoxRadioSchlussrateOn={isContentBoxRadioSchlussrateOn}
            isAnzahlungError={isAnzahlungError}
            openFinancingPackagesInfoModal={openFinancingPackagesInfoModal}
            openFinancialInfoModal={openFinancialInfoModal}
            onChangeWithBalloonRate={onChangeWithBalloonRate}
            onChangeMonths={onChangeMonths}
            onChangeBalloonRate={onChangeBalloonRate}
            onChangeDownPayment={onChangeDownPayment}
          />
        </FinancingTabWrap>
      </FinancingTabContainer>
    </TabPanel>
  );
};

export default FinancingTab;
