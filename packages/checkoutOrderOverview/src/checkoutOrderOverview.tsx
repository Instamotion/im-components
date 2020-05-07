import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoin,
  faTruck,
  faFileAlt,
  faShieldCheck,
  faArrowAltCircleLeft,
  faTrafficCone
} from '@fortawesome/pro-regular-svg-icons';
import { formatting } from '@im-ui/utils';
import theme from '@im-ui/theme';

export interface CarDetails {
  make: string;
  model: string;
  price: number;
  image: string;
}

export interface Translations {
  price: string;
  instaMotionProvides: string;
  delivery: string;
  rego: string;
  warranty: string;
  rightToReturn: string;
  protection: string;
  total: string;
  included: string;
  remark: string;
  services: string;
}

export const translationStrings: Translations = {
  price: 'Fahrzeugpreis',
  instaMotionProvides: 'InstaMotion Services',
  delivery: 'Lieferung nach Hause im Wert von',
  rego: 'Zulassung/Registrierung im Wert von',
  warranty: 'Mind. 1 Jahr Garantie',
  rightToReturn: '14 Tage Rückgaberecht',
  protection: 'Fahrzeugpreis',
  total: 'Gesamt',
  included: 'inkl.',
  remark: 'alle Beträge inkl. MwSt',
  services: 'Optionale InstaMotion Services'
};

export interface CheckoutOrderOverviewProps {
  translations: Translations;
  car: CarDetails;
  fullPrice: number;
  deliveryPrice: number;
  registrationPrice: number;
}

const CheckoutOrderOverview: React.FC<CheckoutOrderOverviewProps> = ({
  translations: t,
  car,
  fullPrice,
  deliveryPrice,
  registrationPrice,
  children
}) => {
  return (
    <Order>
      <ImgWrapper>
        <CarImg
          src={car.image}
          alt={`${car.make} ${car.model}`}
          title={`${car.make} ${car.model}`}
        />
      </ImgWrapper>
      <CarDetails>
        <Headline>
          <Title>{`${car.make} ${car.model}`}</Title>
        </Headline>

        <ServiceItem>
          <Icon>
            <IconStyled icon={faCoin} color="oil" />
          </Icon>
          <Text>{t.price}</Text>
          <Info>{formatting.formatEuroCurrency(car.price)}</Info>
        </ServiceItem>

        <Line></Line>

        <Headline>
          <Title>{t.instaMotionProvides}</Title>
        </Headline>

        <ServiceItem>
          <Icon>
            <IconStyled icon={faTruck} color="oil" />
          </Icon>
          <Text>{t.delivery}</Text>
          <Info>{formatting.formatEuroCurrency(deliveryPrice)}</Info>
        </ServiceItem>

        <ServiceItem>
          <Icon>
            <IconStyled icon={faFileAlt} color="oil" />
          </Icon>
          <Text>{t.rego}</Text>
          <Info>{formatting.formatEuroCurrency(registrationPrice)}</Info>
        </ServiceItem>

        <ServiceItem>
          <Icon>
            <IconStyled icon={faShieldCheck} color="oil" />
          </Icon>
          <Text>{t.warranty}</Text>
          <Info>{t.included}</Info>
        </ServiceItem>

        <ServiceItem>
          <Icon>
            <IconStyled icon={faArrowAltCircleLeft} color="oil" />
          </Icon>
          <Text>{t.rightToReturn}</Text>
          <Info>{t.included}</Info>
        </ServiceItem>

        <ServiceItem>
          <Icon>
            <IconStyled icon={faTrafficCone} color="oil" />
          </Icon>
          <Text>{t.protection}</Text>
          <Info>{t.included}</Info>
        </ServiceItem>

        <Remark>{t.remark}</Remark>

        <Line></Line>

        {children && (
          <Headline>
            <Title>{t.services}</Title>
          </Headline>
        )}

        {children}

        {children && <Line></Line>}

        <Headline>
          <Title>{t.total}</Title>
          <CarPrice>{formatting.formatEuroCurrency(fullPrice)}</CarPrice>
        </Headline>
      </CarDetails>
    </Order>
  );
};

export const LineStyled = styled.svg`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
`;

export const Line: React.FC = () => (
  <LineStyled>
    <line
      x1="100%"
      y1="0%"
      x2="0%"
      y2="100%"
      strokeDasharray="10"
      style={{ stroke: theme.color.silver, strokeWidth: 1 }}
    />
  </LineStyled>
);

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: row;
  color: ${theme.color.brightGrey};
  margin-bottom: 0.5rem;
`;

export const Icon = styled.div`
  flex-grow: 0;
  width: 2.25rem;
`;

export const Text = styled.div`
  flex-grow: 0.7;
`;

export const Info = styled.div`
  flex-grow: 0.3;
  min-width: 4rem;
  text-align: right;
  font-weight: bold;
  color: ${theme.color.oil};
`;

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  ${theme.mediaQueries.whenTablet} {
    flex-direction: row;
  }
`;

export const ImgWrapper = styled.div`
  padding-bottom: 1rem;
  font-size: 1.2rem;
  ${theme.mediaQueries.whenTablet} {
    padding-bottom: 0;
    text-align: center;
    width: 30%;
    font-size: 2rem;
  }
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const CarDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${theme.mediaQueries.whenTablet} {
    width: 70%;
    padding-left: 2rem;
  }
`;

export const IconStyled = styled(FontAwesomeIcon)``;

export const Price = styled.div`
  max-width: 35%;
  float: right;
  font-size: 1rem;
`;

export const Remark = styled.div`
  font-size: 0.75rem;
  text-align: right;
  color: ${theme.color.silver};
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  justify-content: space-between;
  ${theme.mediaQueries.whenTablet} {
    flex-direction: row;
    margin: 0.5rem 0 1rem;
  }
`;

export const Title = styled.div`
  color: ${theme.color.oil};
  font-size: 1.125rem;
  font-weight: bold;
`;

export const CarPrice = styled(Price)`
  font-weight: bold;
  font-size: 1.125rem;
`;

export default CheckoutOrderOverview;
