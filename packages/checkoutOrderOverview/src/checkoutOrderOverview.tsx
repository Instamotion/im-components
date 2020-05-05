import * as React from 'react';
import styled from 'styled-components';
import Checkbox from '@im-ui/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faFileAlt,
  faShieldCheck,
  faArrowAltCircleLeft
} from '@fortawesome/pro-regular-svg-icons';
import { formatting } from '@im-ui/utils';
import theme from '@im-ui/theme';

export interface CarDetails {
  offerID: any;
  variant?: string;
  make: string;
  model: string;
  mileage?: number;
  power?: number;
  firstRegistration?: string;
  fuel?: Fuel;
  consumptionUnit?: string;
  consumptionCombined?: number;
  co2?: number;
  price: number;
  image: string;
}

export enum Fuel {
  Petrol = 'PETROL',
  Diesel = 'DIESEL',
  Lpg = 'LPG',
  Cng = 'CNG',
  Gas = 'GAS',
  Electricity = 'ELECTRICITY',
  Hybrid = 'HYBRID',
  Hydrogenium = 'HYDROGENIUM',
  Ethanol = 'ETHANOL',
  HybridDiesel = 'HYBRID_DIESEL',
  HybridAll = 'HYBRID_ALL',
  Other = 'OTHER'
}

export interface Translations {
  carMileage: string;
  carPower: string;
  carRego: string;
  carFuel: string;
  carConsumption: string;
  carEmission: string;
  instaMotionProvides: string;
  delivery: string;
  rego: string;
  warranty: string;
  rightToReturn: string;
  included: string;
  fuel: fuelTranslations;
}

export type fuelTranslations = {
  [key in Fuel]: string;
};

export const translationStrings: Translations = {
  carMileage: 'Kilometer',
  carPower: 'Leistung',
  carRego: 'Zulassung',
  carFuel: 'Kraftstoff',
  carConsumption: 'Verbrauch (kombiniert)',
  carEmission: 'CO2-Emissionen',
  instaMotionProvides: 'InstaMotion Services',
  delivery: 'Lieferung nach Hause im Wert von',
  rego: 'Zulassung/Registrierung im Wert von',
  warranty: 'Mind. 1 Jahr Garantie',
  rightToReturn: '14 Tage Rückgaberecht',
  included: 'inkl.',
  fuel: {
    PETROL: 'Benzin',
    DIESEL: 'Diesel',
    LPG: 'Autogas (LPG)',
    CNG: 'Erdgas (CNG)',
    GAS: 'Gas',
    ELECTRICITY: 'Elektro',
    HYBRID: 'Hybrid (Benzin/Elektro)',
    HYDROGENIUM: 'Wasserstoff',
    ETHANOL: 'Ethanol (FFV, E85 etc.)',
    HYBRID_DIESEL: 'Hybrid (Diesel / Elektro)',
    HYBRID_ALL: 'Hybrid',
    OTHER: 'Andere'
  }
};

export interface CheckoutOrderOverviewProps {
  className?: string;
  translations: Translations;
  car: CarDetails;
  readOnly?: boolean;
  deliveryPrice: number;
  registrationPrice: number;
  customPlatesPrice: number;
  setWithLicensePlate?: (value: boolean) => void;
  withLicensePlate?: boolean;
}

export const CheckoutOrderOverview: React.FC<CheckoutOrderOverviewProps> = ({
  translations: t,
  className,
  readOnly,
  deliveryPrice,
  registrationPrice,
  customPlatesPrice,
  car,
  setWithLicensePlate,
  withLicensePlate
}) => {
  return (
    <Wrapper className={className}>
      <Order>
        <ImgWrapper>
          <CarImg
            src={car.image}
            alt={`${car.make} ${car.model}`}
            title={`${car.make} ${car.model}`}
          />
        </ImgWrapper>
        <PriceOverview>
          <CarOverview className="car-overview">
            <CarNameAndPrice>
              <CarName className="car-name">{`${car.make} ${car.model}`}</CarName>
              <CarPrice>{formatting.formatEuroCurrency(Number(car.price))}</CarPrice>
            </CarNameAndPrice>
            <CarInfo className="car-info">
              {car.mileage && (
                <CarInfoItem>
                  <CarInfoItemLabel>{t.carMileage}</CarInfoItemLabel>{' '}
                  {`${formatting.formatNumber(Number(car.mileage))} km`}
                </CarInfoItem>
              )}
              {car.power && (
                <CarInfoItem>
                  <CarInfoItemLabel>{t.carPower}</CarInfoItemLabel>{' '}
                  {`${car.power} KW (${Math.floor(Number(car.power) / 0.73549875)} PS)`}
                </CarInfoItem>
              )}
              {car.firstRegistration && (
                <CarInfoItem>
                  <CarInfoItemLabel>{t.carRego}</CarInfoItemLabel> {car.firstRegistration}
                </CarInfoItem>
              )}
              {car.fuel && (
                <CarInfoItem>
                  <CarInfoItemLabel>{t.carFuel}</CarInfoItemLabel> {t.fuel[car.fuel]}
                </CarInfoItem>
              )}
              {car.consumptionCombined && (
                <CarInfoItem>
                  <CarInfoItemLabel>{t.carConsumption}</CarInfoItemLabel>{' '}
                  {`${car.consumptionCombined}/100km*`}
                </CarInfoItem>
              )}
              <CarInfoItem>
                <CarInfoItemLabel>{t.carEmission}</CarInfoItemLabel> {`${car.co2} g/km*`}
              </CarInfoItem>
            </CarInfo>
          </CarOverview>

          <ServicesOverview>
            <p>
              <strong>{t.instaMotionProvides}</strong>
            </p>
            <Service>
              <IconStyled icon={faTruck} color="oil" />
              {t.delivery}
            </Service>
            <Price>{formatting.formatEuroCurrency(deliveryPrice)}</Price>

            <Service>
              <IconStyled icon={faFileAlt} color="oil" />
              {t.rego}
            </Service>
            <Price>{formatting.formatEuroCurrency(registrationPrice)}</Price>

            <Service>
              <IconStyled icon={faShieldCheck} color="oil" />
              {t.warranty}
            </Service>
            <Price>{t.included}</Price>

            <Service>
              <IconStyled icon={faArrowAltCircleLeft} color="oil"></IconStyled>
              {t.rightToReturn}
            </Service>
            <Price>{t.included}</Price>
          </ServicesOverview>
          <Remark>alle Beträge inkl. MwSt</Remark>
        </PriceOverview>
      </Order>
      <CustomPlates>
        <ImgWrapper>
          <img src="https://cdn.instamotion.com/images/license-plate.svg" alt="license plate"></img>
        </ImgWrapper>
        <CustomPlatesOverview>
          <Checkbox
            id="custom-plates"
            checked={!!withLicensePlate}
            onChange={setWithLicensePlate}
            message="Wunschkennzeichen"
            disabled={readOnly}
          />
          <Price>{formatting.formatEuroCurrency(readOnly ? 0 : customPlatesPrice)}</Price>
        </CustomPlatesOverview>
      </CustomPlates>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 3rem;
  text-align: left;
`;

const Order = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  ${theme.mediaQueries.whenTablet} {
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  padding-bottom: 1rem;
  font-size: 1.2rem;
  ${theme.mediaQueries.whenTablet} {
    padding-bottom: 0;
    text-align: center;
    width: 30%;
    font-size: 2rem;
  }
`;

const CarImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const PriceOverview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${theme.mediaQueries.whenTablet} {
    width: 70%;
    padding-left: 2rem;
  }
`;

const CarOverview = styled.div`
  padding-bottom: 1rem;
  border-bottom: 2px dashed ${theme.color.silver};
`;

const CarInfo = styled.div`
  font-size: 0.8rem;
`;

const ServicesOverview = styled.div`
  position: relative;
  border-bottom: 2px dashed ${theme.color.silver};
  p {
    width: 100%;
  }
`;

const IconStyled = styled(FontAwesomeIcon)``;

const Service = styled.div`
  float: left;
  width: 70%;
  padding-bottom: 1rem;
  ${IconStyled} {
    padding: 0 1rem 0 0;
  }
`;

const Price = styled.div`
  max-width: 35%;
  float: right;
  font-size: 1rem;
`;

const CarPrice = styled(Price)`
  font-weight: bold;
`;

const Remark = styled.div`
  padding-top: 1rem;
  text-align: right;
  color: lightgray;
`;

const CustomPlates = styled.section`
  border-top: solid 2px ${theme.color.oil};
  padding: 1rem 0;
  display: flex;
  justify-content: flex-end;
  ${theme.mediaQueries.whenTablet} {
    flex-direction: row;
    padding: 2rem 0;
  }
`;

const CustomPlatesOverview = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  ${theme.mediaQueries.whenTablet} {
    width: 70%;
    padding-left: 2rem;
    padding-top: 0.6rem;
  }
`;

const CarNameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: space-between;
  ${theme.mediaQueries.whenTablet} {
    flex-direction: row;
    padding: 0 0 1rem;
  }
`;

const CarName = styled.div`
  font-weight: bold;
`;

const CarInfoItem = styled.div`
  margin-bottom: 0.5rem;
  display: block;
`;

const CarInfoItemLabel = styled.span`
  min-width: 9rem;
  display: inline-block;
`;

export default CheckoutOrderOverview;
