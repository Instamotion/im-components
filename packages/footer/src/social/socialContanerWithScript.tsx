import React from 'react';
import SocialContainer from './socialContainer';
import useScript from './useScript';

interface Props {
  googleToken: string;
  facebookToken: string;
}

export const SocialContainerWithScript: React.FC<Props> = ({
  googleToken,
  facebookToken
}): React.ReactElement => {
  // TODO: widgetEmbedUrl should be moved to .env variables
  const widgetEmbedUrl = 'https://reviewsonmywebsite.com/js/embedLoader.js?id=16985fd9e429040ba7c6';
  useScript(widgetEmbedUrl);

  return <SocialContainer googleToken={googleToken} facebookToken={facebookToken} />;
};

export default SocialContainerWithScript;
