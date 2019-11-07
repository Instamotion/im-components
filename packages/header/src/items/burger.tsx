import React from 'react';
import styled from 'styled-components';
import Icon from '@im-ui/icon';
import theme, { AvailableColors } from '@im-ui/theme';
import BurgerIcon from './burgerIconWrapper';
import TagManager, { DataLayerArgs } from 'react-gtm-module';

interface Props {
  className?: string;
  isOpen: boolean;
  textColor: AvailableColors;
  clickedCb: () => void;
}

export const BurgerComponent: React.FC<Props> = ({ className, isOpen, textColor, clickedCb }) => {
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
      <BurgerIcon
        isVisible={!isOpen}
        icon={<Icon iconName={'bars'} size={16} color={textColor} />}
      ></BurgerIcon>
      <BurgerIcon
        isVisible={isOpen}
        icon={<Icon iconName={'times'} size={16} color={textColor} />}
      ></BurgerIcon>
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

export default Burger;
