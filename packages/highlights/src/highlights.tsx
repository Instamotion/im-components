import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Icon from '@im-ui/icon';

const HighlightsWrap = styled.div<{ isPdp?: boolean }>`
  width: 100%;
  ${theme.mediaQueries.whenDesktop} {
    background: ${props =>
      !props.isPdp
        ? `linear-gradient(180deg,${theme.color.lightGreyBG} 50%,${theme.color.white} 50%)`
        : ''};
    display: block;
    box-sizing: border-box;
  }
`;

const HighlightsContainer = styled.div<{ isPdp?: boolean }>`
  display: flex;
  flex-direction: row;
  max-width: ${props => (props.isPdp ? `` : '67.25rem')};
  font-size: 1.125rem;
  flex-wrap: wrap;

  ${theme.mediaQueries.whenDesktop} {
    margin: auto;
    justify-content: ${props => (props.isPdp ? `flex-start` : 'space-between')};
    padding: ${props => (props.isPdp ? `0rem` : '0.4rem 3rem')};
  }
`;

const Highlight = styled.div<{ isPdp?: boolean }>`
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.lightGreyBG};
  border: 1px solid ${theme.color.lightGreyBG};
  border-radius: 0.5rem;
  padding: 0.3rem 1rem 0.4rem;
  box-shadow: 0rem 0.07rem 0.5rem rgb(0 0 0 / 11%);

  ${theme.mediaQueries.whenDesktop} {
    margin: ${props => (props.isPdp ? 0.8 : 0)} 'rem';
  }
`;

const IconWrap = styled.span`
  margin-right: 0.875rem;
`;

const Text = styled.span`
  margin-top: 0.2rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${theme.color.oil};
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
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
    <Highlight key={elem.type} isPdp={offer.isPdp}>
      <IconWrap>{elem.icon}</IconWrap>
      <Text>{elem.value}</Text>
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
  isPdp?: boolean;
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
  isPdp
}) => (
  <HighlightsWrap isPdp={isPdp}>
    <HighlightsContainer isPdp={isPdp}>
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
        isPdp
      })}
    </HighlightsContainer>
  </HighlightsWrap>
);

const Highlights = styled(HighlightsComponent)``;

export default Highlights;
