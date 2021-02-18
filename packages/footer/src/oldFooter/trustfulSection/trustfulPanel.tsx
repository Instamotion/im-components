import React from 'react';
import styled from 'styled-components';
import TrustfulLogo from './trustfulLogo';
import TrustfulHeading from './trustfulHeading';
import theme from '@im-ui/theme';

const trustfulLogos: { name: string }[] = [
  { name: 'autobild' },
  { name: 'rtl' },
  { name: 'welt' },
  { name: 'servus' },
  { name: 'autohaus' },
  { name: 'dmax' }
];

interface TrustfulPanelComponentProps {
  className?: string;
}

const TrustfulPanelComponent: React.FC<TrustfulPanelComponentProps> = ({ className }) => (
  <div className={className}>
    <TrustfulHeading />
    {trustfulLogos.map(logo => (
      <TrustfulLogo logoName={logo.name} key={logo.name} />
    ))}
  </div>
);

const TrustfulPanel = styled(TrustfulPanelComponent)`
  background: #fff;
  color: #fff;
  display: none;
  -webkit-box-pack: justify;
  -webkit-justify-content: center;
  -ms-flex-pack: justify;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${theme.mediaQueries.whenTablet} {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
`;

export default TrustfulPanel;
