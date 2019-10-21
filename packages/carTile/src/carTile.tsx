import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';
import { formatting } from '@im-ui/utils';
import { pick } from 'lodash';
import InfoItemComponent from './infoItem';

export interface CarInfoModel {
  mileage: string;
  power: number;
  firstRegistration: string;
  fuel: string;
  gearbox: string;
  condition: string;
  consumptionCombined: string;
  co2: string;
}

export interface CarTileProps extends CarInfoModel {
  className?: string;
  id: string;
  image: string;
  make: string;
  model: string;
  variant: string;
  price: string;
  monthlyInstallment: number;
}

const CarTileComponent: React.FC<CarTileProps> = ({
  className,
  make,
  model,
  variant,
  image,
  monthlyInstallment,
  price,
  ...props
}) => {
  const info = pick(props, [
    'mileage',
    'power',
    'firstRegistration',
    'fuel',
    'gearbox',
    'condition',
    'consumptionCombined',
    'co2'
  ]);
  const imageWidth = 286;
  return (
    <Tile className={className} onClick={() => {}}>
      <CarTileTop>
        <Favorite>
          <Icon iconName="star" size={16} color="downy" />
        </Favorite>
        <Name>{`${make} ${model}`}</Name>
        <ModelDescription>{variant}</ModelDescription>
        <Tooltip>{variant}</Tooltip>
      </CarTileTop>
      {image ? (
        <CarImage url={image} />
      ) : (
        <CarPlaceholder>
          <Icon iconName="tilePlaceholder" size={imageWidth} />
        </CarPlaceholder>
      )}
      <CarPrice>
        <Price>{`${monthlyInstallment} € p.M.`}</Price>
        <AlternativePrice>
          <FormattedMessage id="car.tile.or" />
          {` ${formatting.formatNumber(+price, 'de-DE')},– €`}
        </AlternativePrice>
      </CarPrice>
      <InfoItemComponent {...info} />
    </Tile>
  );
};

export const Tile = styled.div`
  margin: 1rem;
  width: 18rem;
  height: 34.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0, 0, 0.9, 0.9) 0s, outline 0s;
  &:hover {
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1);
    outline: solid 0.03125rem ${theme.color.downy};
    transform: translateY(-0.5rem);
    cursor: pointer;
  }
`;

const CarTileTop = styled.div`
  width: 100%;
  height: 8.5rem;
`;

const Favorite = styled.div`
  height: 1rem;
  text-align: end;
  padding-top: 0.5rem;
  padding-right: 0.5rem;
`;

export const Name = styled.div`
  font-family: ${theme.font.sans.family};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.color.oil};
  margin-left: 1rem;
  margin-right: 2.25rem;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CarImage = styled.div`
  height: 11.125rem;
  ${(props: { url: string }) => css`
    background: url(${props.url});
  `};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CarPlaceholder = styled.div`
  height: 11.125rem;
  padding-left: 1rem;
`;

const CarPrice = styled.div`
  text-align: end;
  padding: 1rem;
`;

export const Price = styled.div`
  font-family: ${theme.font.sans.family};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.color.niagara};
`;

export const AlternativePrice = styled.div`
  font-family: ${theme.font.sans.family};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  color: ${theme.color.brightGrey};
  margin-top: 0.25rem;
`;

export const Tooltip = styled.div`
  max-width: 14.5rem;
  min-height: 1.125rem;
  max-height: 2rem;
  position: absolute;
  left: 2rem;
  padding: 0.5rem;
  font-family: ${theme.font.sans.family};
  font-size: 0.625rem;
  color: ${theme.color.oil};
  line-height: 1.8;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0.03125rem;
  border-image-source: linear-gradient(to top, ${theme.color.white}, ${theme.color.white});
  border-image-slice: 1;
  background-image: linear-gradient(to top, ${theme.color.white}, ${theme.color.white}),
    linear-gradient(to top, ${theme.color.white}, ${theme.color.white});
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0, 0, 0.9, 0.9) 0s;
`;

export const ModelDescription = styled.div`
  font-family: ${theme.font.sans.family};
  font-size: 1rem;
  color: ${theme.color.oil};
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 2.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover ~ ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export default CarTileComponent;
