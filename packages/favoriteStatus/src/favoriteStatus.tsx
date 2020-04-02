import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Icon from '@im-ui/icon';
import theme from '@im-ui/theme';
import styled, { css } from 'styled-components';

export interface FavoriteStatusProps {
  changeFavoritesCount?: (count: number) => void;
  toggleFavouriteCallback?: Function;
}

export type FavoriteToggler = {
  toggled: boolean;
};

const FAVORITE_TOGGLE_TIMEOUT = 3000;

const FavoriteStatusStyled = styled.div<FavoriteToggler>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  height: 1rem;
  text-align: end;
  padding: 0.25rem;
  max-width: 1rem;
  transition: max-width 0.3s ease-in-out;
  ${theme.mediaQueries.whenDesktop} {
    ${props =>
      props.toggled &&
      css`
        max-width: 12rem;
        background-color: ${theme.color.lightGrey};
      `}
    &:hover {
      background-color: ${theme.color.lightGrey};
    }
  }
  span {
    vertical-align: 0;
  }
`;

const ToggledMessage = styled.span`
  display: inline;
  font-size: 0.875rem;
  color: ${theme.color.brightGrey};
  padding-right: 0.5rem;
`;

const FavoriteStatus: React.FC<FavoriteStatusProps> = ({
  changeFavoritesCount,
  // offer,
  toggleFavouriteCallback
}) => {
  const [isOfferFavorite, seIsOfferFavorite] = useState(false);
  const [offerToggled, setOfferToggled] = useState(false);

  const messageTimeout = useRef(0);

  const handleFavoriteClick = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(messageTimeout.current);
    seIsOfferFavorite(!isOfferFavorite);

    setOfferToggled(true);
    messageTimeout.current = setTimeout(() => {
      setOfferToggled(false);
    }, FAVORITE_TOGGLE_TIMEOUT);

    if (toggleFavouriteCallback) toggleFavouriteCallback();

    if (changeFavoritesCount) changeFavoritesCount(isOfferFavorite ? -1 : 1);
    console.log(messageTimeout.current);
  };

  useEffect(() => {
    return clearTimeout(messageTimeout.current);
  }, []);

  return (
    <FavoriteStatusStyled toggled={offerToggled} onClick={handleFavoriteClick}>
      {offerToggled ? (
        <ToggledMessage>
          <FormattedMessage
            id={isOfferFavorite ? 'car.tile.addedToFavorite' : 'car.tile.removedFromFavorite'}
          />
        </ToggledMessage>
      ) : null}
      {isOfferFavorite ? (
        <Icon icon="star" color="downy" />
      ) : (
        <Icon icon="starFilled" color="downy" />
      )}
    </FavoriteStatusStyled>
  );
};

export default FavoriteStatus;
