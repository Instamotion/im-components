import React from 'react';
import styled from 'styled-components';
import Icon from '@im-ui/icon';
import theme, { AvailableColors } from '@im-ui/theme';
import BurgerIcon from './burgerIconWrapper';
import TagManager, { DataLayerArgs } from 'react-gtm-module';

interface Props {
  className?: string;
  isOpen: boolean;
  favoritesCount: number;
  clickedCb: () => void;
}

export const BurgerComponent: React.FC<Props> = ({
  className,
  isOpen,
  clickedCb,
  favoritesCount
}) => {
  const tag = (): void => {
    const dataLayer: DataLayerArgs = {
      dataLayer: {
        event: 'open_menue_mobile',
        category: 'header_cta',
        label: 'not used',
        value: 1
      }
    };
    TagManager.dataLayer(dataLayer);
    clickedCb();
  };

  return (
    <div className={className} onClick={tag}>
      {favoritesCount > 0 && !isOpen && <Favorites>{favoritesCount}</Favorites>}
      <BurgerIcon isVisible={!isOpen}>
        <Icon iconName={'bars'} size={16} color={'white'} />
      </BurgerIcon>
      <BurgerIcon isVisible={isOpen}>
        <Icon iconName={'times'} size={16} color={'white'} />
      </BurgerIcon>
    </div>
  );
};

const Burger = styled(BurgerComponent)`
  display: block;
  position: relative;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
  ${BurgerIcon}:last-child {
    position: absolute;
    top: 0;
  }
`;

const Favorites = styled.span`
  color: ${theme.color.downy};
  position: absolute;
  padding-left: 0;
  font-size: 0.75em;
  bottom: 1.35em;
  right: -0.5em;
`;

export default Burger;
