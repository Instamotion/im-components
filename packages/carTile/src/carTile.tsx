import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';
import { FormattedMessage } from 'react-intl';
import { formatting } from '@im-ui/utils';
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

export interface CarTileProps {
  className?: string;
  id: string;
  order: number;
  image: string;
  make: string;
  model: string;
  modelDescription: string;
  price: string;
  monthlyInstallment: number;
  mileage: string;
  power: number;
  firstRegistration: string;
  fuel: string;
  gearbox: string;
  condition: string;
  consumptionCombined: string;
  co2: string;
}

export interface TileProps {
  order: number;
}

const CarTileComponent: React.FC<CarTileProps> = ({
  className,
  order,
  make,
  model,
  modelDescription,
  image = 'https://cdn.instamotion.com/images/car-tile-placeholder.svg',
  monthlyInstallment,
  price,
  mileage,
  power,
  firstRegistration,
  fuel,
  gearbox,
  condition,
  consumptionCombined,
  co2
}) => {
  const imageWidth = 286;
  const info: CarInfoModel = {
    mileage,
    power,
    firstRegistration,
    fuel,
    gearbox,
    condition,
    consumptionCombined,
    co2
  };

  return (
    <CarTileWrapper order={order}>
      <Tile className={className}>
        <CarTileTop>
          <Favorite>
            <Icon icon="star" color="downy" />
          </Favorite>
          <Name>{`${make} ${model}`}</Name>
          <ModelDescription>{modelDescription}</ModelDescription>
          <Tooltip>{modelDescription}</Tooltip>
        </CarTileTop>
        <CarImage url={image} />
        <CarPrice>
          <Price>{`${formatting.formatNumber(+monthlyInstallment, 'de-DE')},– € p.M.`}</Price>
          <AlternativePrice>
            <FormattedMessage id="car.tile.or" />
            {` ${formatting.formatNumber(+price, 'de-DE')},– €`}
          </AlternativePrice>
        </CarPrice>
        <InfoItemComponent {...info} />
      </Tile>
    </CarTileWrapper>
  );
};

const CarTileWrapper = styled.div<TileProps>`
  display: flex;
  order: ${props => props.order};
  flex-basis: 100%;
  justify-content: center;
  ${theme.mediaQueries.whenMobileL} {
    flex-basis: 33%;
  }
  ${theme.mediaQueries.whenDesktop} {
    display: flex;
    flex-basis: 25%;
    justify-content: flex-start;
  }
`;

export const Tile = styled.div`
  width: 18rem;
  height: 34.75rem;
  border: solid 0.0625rem transparent;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0, 0, 0.9, 0.9) 0s, outline 0s;
  &:hover {
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1);
    border: solid 0.0625rem ${theme.color.downy};
    transform: translateY(-0.5rem);
    cursor: pointer;
  }
  margin: 0.5rem 0;
  ${theme.mediaQueries.whenDesktop} {
    margin: 1rem 0;
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
