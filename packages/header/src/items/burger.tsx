import React from 'react';
import styled from 'styled-components';
import Icon from '@im-ui/icon';
import theme, { AvailableColors } from '@im-ui/theme';
import MenuIconWrapped from './menu-icon-wrapper';

interface Props {
  className?: string;
  isOpen: boolean;
  textColor: AvailableColors;
  clickedCb: () => void;
}

export const BurgerComponent: React.FC<Props> = ({ className, isOpen, textColor, clickedCb }) => {
  return (
    <div onClick={() => clickedCb()} className={className}>
      <MenuIconWrapped
        isVisible={!isOpen}
        icon={<Icon iconName={'bars'} size={16} color={textColor} />}
      ></MenuIconWrapped>
      <MenuIconWrapped
        isVisible={isOpen}
        icon={<Icon iconName={'times'} size={16} color={textColor} />}
      ></MenuIconWrapped>
    </div>
  );
};

const Burger = styled(BurgerComponent)`
  display: block;
  position: relative;
  cursor: pointer;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
  ${MenuIconWrapped}:nth-child (2) {
    position: absolute;
    top: 0;
  }
`;

export default Burger;
