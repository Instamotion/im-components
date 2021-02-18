import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import SocialItem from './socialItem';
import TagManager, { DataLayerArgs } from 'react-gtm-module';
import useScript from './useScript';

interface Props {
  googleToken: string;
  facebookToken: string;
}

const SocialContainerComponent: React.FC<Props> = ({ googleToken, facebookToken }) => {
  // TODO: widgetEmbedUrl should be moved to .env variables
  const widgetEmbedUrl = 'https://reviewsonmywebsite.com/js/embedLoader.js?id=16985fd9e429040ba7c6';
  useScript(widgetEmbedUrl);

  const tag = (track: string): void => {
    const dataLayer: DataLayerArgs = {
      dataLayer: {
        event: track
      }
    };
    TagManager.dataLayer(dataLayer);
  };

  return (
    <SocialContainer>
      <SocialItem
        content={
          <SocialItemContent
            data-token={googleToken}
            onClick={() => tag('Google_Score_from_footer')}
            className="romw-badge"
          />
        }
      />
      <SocialItem
        content={
          <SocialItemContent
            data-token={facebookToken}
            onClick={() => tag('FB_Score_from_footer')}
            className="romw-badge"
          />
        }
      />
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  grid-area: social;
  display: flex;
  ${theme.mediaQueries.whenTablet} {
    flex-direction: column;
    align-items: center;
    grid-row-end: 5;
  }
  ${theme.mediaQueries.whenDesktop} {
    grid-row-end: unset;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const SocialItemContent = styled.div``;

export default SocialContainerComponent;
