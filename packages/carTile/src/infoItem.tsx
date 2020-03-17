import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';
import { converter } from '@im-ui/utils';
import { CarInfoModel } from './carTile';

export const transformInfo = (type: string, value: number | string): object => {
  if (!value || value === '. ') {
    return {
      id: 'car.tile.not_available'
    };
  }
  const props = {
    defaultMessage: 'Nicht verfügbar'
  };
  switch (type) {
    case 'power': {
      return {
        ...props,
        id: 'car.tile.power',
        values: { kw: value, ps: converter.kilowattsToHorsePower(+value) }
      };
    }
    case 'firstRegistration':
    case 'mileage':
    case 'consumptionCombined':
    case 'co2':
      return {
        ...props,
        id: `car.tile.${type}`,
        values: { val: value }
      };
    case 'fuel':
    case 'gearbox':
    case 'condition':
      return {
        ...props,
        id: `${type}.${value}`
      };
    default:
      return {
        id: 'car.tile.not_available'
      };
  }
};

interface InfoItemProps extends CarInfoModel {
  [index: string]: string | number;
}

const InfoItemComponent: React.FC<InfoItemProps> = props => (
  <AdditionalInfo>
    {Object.keys(props).map((key: any) => (
      <InfoItem key={`ii-${key}`}>
        <Icon icon={key} />
        <InfoLabel available={!!props[key]}>
          <FormattedMessage id={key} {...transformInfo(key, props[key])} />
        </InfoLabel>
      </InfoItem>
    ))}
  </AdditionalInfo>
);

const AdditionalInfo = styled.ul`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0;
`;

export const InfoLabel = styled.div`
  font-family: ${theme.font.sans.family};
  font-size: 0.75rem;
  color: ${theme.color.oil};
  margin-left: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  ${(props: { available: boolean }) =>
    !props.available &&
    css`
      color: ${theme.color.silver};
    `}
`;

export const InfoItem = styled.li`
  width: 7rem;
  flex-basis: 50%;
  padding-top: 0.4375rem;
  padding-bottom: 0.4375rem;
  border-top: 0.0625rem solid ${theme.color.silver};
  display: flex;
  align-items: center;
  white-space: nowrap;
  :nth-child(7) {
    white-space: normal;
  }
  :nth-child(8) {
    white-space: normal;
  }
`;

export default InfoItemComponent;
