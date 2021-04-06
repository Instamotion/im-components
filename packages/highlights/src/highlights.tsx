import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Icon from '@im-ui/icon';

const HighlightsWrap = styled.div<{ displayWithShadow?: boolean }>`
  width: 100%;
  display: inline-block;
  background: ${props =>
    !props.displayWithShadow
      ? `linear-gradient(180deg,${theme.color.lightGreyBG} 50%,${theme.color.white} 50%)`
      : ''};

  ${theme.mediaQueries.whenDesktop} {
    display: block;
    box-sizing: border-box;
  }
`;

const HighlightsContainer = styled.div<{ displayWithShadow?: boolean }>`
  display: flex;
  flex-direction: row;
  max-width: ${props => (props.displayWithShadow ? `` : '67.25rem')};
  font-size: 1.125rem;
  overflow-x: scroll;

  ${theme.mediaQueries.whenDesktop} {
    overflow-x: hidden;
    margin: auto;
    justify-content: ${props => (props.displayWithShadow ? `flex-start` : 'space-between')};
    padding: ${props => (props.displayWithShadow ? `0rem` : '0.4rem 3rem')};
    flex-wrap: ${props => (props.displayWithShadow ? `wrap` : 'no-wrap')};
  }
`;

const Highlight = styled.div<{ displayWithShadow?: boolean }>`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.displayWithShadow ? theme.color.lightGreyBG : theme.color.white};
  border: 1px solid
    ${props => (props.displayWithShadow ? theme.color.lightGreyBG : theme.color.oil)};
  border-radius: 0.5rem;
  padding: 0.3rem 1rem 0.4rem;
  box-shadow: ${props =>
    props.displayWithShadow ? '0.05rem 0.1rem 0.3rem rgb(0 0 0 / 5%)' : 'none'};

  ${theme.mediaQueries.whenDesktop} {
    margin: ${props => (props.displayWithShadow ? 0.8 : 0)} 'rem';
  }
`;

const IconWrap = styled.span`
  margin-right: 0.875rem;
`;

const Text = styled.span<{ displayWithShadow?: boolean }>`
  margin-top: 0.2rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${theme.color.oil};
  font-family: ${props =>
    props.displayWithShadow ? theme.font.bentonRegular.family : theme.font.bentonMedium.family};
  font-weight: ${props =>
    props.displayWithShadow ? theme.font.bentonRegular.weight : theme.font.bentonMedium.weight};
  white-space: nowrap;
  overflow: hidden;
`;

export const GEAR = {
  AUTOMATIC_GEAR: 'Automatik',
  SEMIAUTOMATIC_GEAR: 'Halbautomatik',
  MANUAL_GEAR: 'Schaltgetriebe'
};

const getGearTitle = (type: keyof typeof GEAR) => {
  return type && GEAR[type] ? GEAR[type] : GEAR.MANUAL_GEAR;
};

export const FUEL = {
  CNG: 'Erdgas (CNG)',
  DIESEL: 'Diesel',
  ELECTRICITY: 'Elektro',
  ETHANOL: 'Ethanol (FFV, E85 etc.)',
  GAS: 'Gas',
  HYBRID: 'Hybrid (Benzin/Elektro)',
  HYBRID_DIESEL: 'Hybrid (Diesel/Elektro)',
  HYDROGENIUM: 'Wasserstoff',
  LPG: 'Autogas (LPG)',
  PETROL: 'Benzin',
  OTHER: 'Sonstige'
};

const getFuelTitle = (type: keyof typeof FUEL) => {
  return type && FUEL[type] ? FUEL[type] : FUEL.OTHER;
};

const formatMileage = (mileage?: number): string => {
  return mileage ? `${mileage.toLocaleString('de-DE')} km` : 'Nicht verfügbar';
};

const convertKwToPs = (kw: number) => kw && Math.ceil(kw * 1.35962);

const renderHighlights = (offer: HighlightsProps) => {
  const isNew = offer.condition === 'NEW';
  const options = {
    mileage: {
      value: formatMileage(offer.mileage),
      icon: <Icon icon="newMileage" color="primary" style={{ fontSize: '1.4rem' }} />
    },
    fuel: {
      value: getFuelTitle(offer.fuel),
      icon: <Icon icon="newFuel" color="primary" />
    },
    gear: {
      value: getGearTitle(offer.gear),
      icon: <Icon icon="gear" color="primary" />
    },
    registrationDate: {
      value: isNew ? 'Neuwagen' : `EZ ${offer.registrationDate}`,
      icon: <Icon icon="date" color="primary" />
    },
    power: {
      value: `${convertKwToPs(offer.power)} PS`,
      icon: <Icon icon="newPower" color="primary" style={{ fontSize: '1rem' }} />
    },
    consumption: {
      value: `${offer.consumption}l/100km`,
      icon: <Icon icon="consumption" color="primary" />
    },
    preOwners: {
      value: `${isNew ? 0 : offer.preOwners} Vorbesitzer`,
      icon: <Icon icon="owners" color="primary" style={{ fontSize: '1rem' }} />
    }
  };

  const highlights = offer.order
    .map((elem: string) => {
      return {
        type: elem,
        icon: options[elem as keyof typeof options].icon,
        value: options[elem as keyof typeof options].value
      };
    })
    .slice(0, 6);

  return highlights.map(elem => (
    <Highlight key={elem.type} displayWithShadow={offer.displayWithShadow}>
      <IconWrap>{elem.icon}</IconWrap>
      <Text displayWithShadow={offer.displayWithShadow}>{elem.value}</Text>
    </Highlight>
  ));
};

export interface HighlightsProps {
  order: string[];
  condition: string;
  mileage: number;
  fuel: keyof typeof FUEL;
  gear: keyof typeof GEAR;
  registrationDate: string;
  power: number;
  consumption: number;
  preOwners: number;
  displayWithShadow?: boolean;
}

const HighlightsComponent: React.FC<HighlightsProps> = ({
  order,
  condition,
  mileage,
  fuel,
  gear,
  registrationDate,
  power,
  consumption,
  preOwners,
  displayWithShadow
}) => (
  <HighlightsWrap displayWithShadow={displayWithShadow}>
    <HighlightsContainer displayWithShadow={displayWithShadow}>
      {renderHighlights({
        order,
        condition,
        mileage,
        fuel,
        gear,
        registrationDate,
        power,
        consumption,
        preOwners,
        displayWithShadow
      })}
    </HighlightsContainer>
  </HighlightsWrap>
);

const Highlights = styled(HighlightsComponent)``;

export default Highlights;
