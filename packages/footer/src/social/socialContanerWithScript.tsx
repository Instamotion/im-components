import * as React from 'react';
import SocialContainer from './socialContainer';

interface Props {
  googleToken: string;
  facebookToken: string;
}

export const SocialContainerWithScript: React.FC<Props> = ({
  googleToken,
  facebookToken
}): React.ReactElement => {
  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://reviewsonmywebsite.com/js/embedLoader.js?id=dbaebe9662c6466e4cbe';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return <SocialContainer googleToken={googleToken} facebookToken={facebookToken} />;
};

export default SocialContainerWithScript;
