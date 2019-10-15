import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import SocialItem from './socialItem';
import TagManager, { DataLayerArgs } from 'react-gtm-module';

interface Props {
  googleToken: string;
  facebookToken: string;
}

const SocialContainerComponent: React.FC<Props> = ({ googleToken, facebookToken }) => {
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
