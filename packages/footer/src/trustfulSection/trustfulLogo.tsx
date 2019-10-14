import * as React from 'react';
import styled from 'styled-components';
import Autobild from '../../assets/autobild-logo.svg';
import Rtl from '../../assets/rtl-logo.svg';
import Welt from '../../assets/welt-logo.svg';
import Servus from '../../assets/servus-logo.svg';
import Autohaus from '../../assets/autohaus-logo.svg';
import Dmax from '../../assets/dmax-logo.svg';

const renderTrustfulLogo = (logoName: string): React.ReactNode => {
  switch (logoName) {
    case 'autobild':
      return <Autobild />;
    case 'rtl':
      return <Rtl />;
    case 'welt':
      return <Welt />;
    case 'servus':
      return <Servus />;
    case 'autohaus':
      return <Autohaus />;
    case 'dmax':
      return <Dmax />;
    default:
      return '';
  }
};

export interface TrustfulLogoProps {
  className?: string;
  logoName: string;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const TrustfulLogoComponent: React.FC<TrustfulLogoProps> = ({
  logoName,
  link,
  className,
  onClick
}) => (
  <div className={className}>
    <a href={link} onClick={onClick}>
      {renderTrustfulLogo(logoName)}
    </a>
  </div>
);

const TrustfulLogo = styled(TrustfulLogoComponent)`
  text-align: center;
`;

export default TrustfulLogo;
