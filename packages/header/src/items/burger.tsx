import React from 'react';
import styled from 'styled-components';
import Icon from '@im-ui/icon';
import theme, { AvailableColors } from '@im-ui/theme';
import BurgerIcon from './burgerIconWrapper';

interface Props {
  className?: string;
  isOpen: boolean;
  textColor: AvailableColors;
  clickedCb: () => void;
}

export const BurgerComponent: React.FC<Props> = ({ className, isOpen, textColor, clickedCb }) => {
  return (
    <div className={className} onClick={() => clickedCb()}>
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
  cursor: pointer;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
  ${BurgerIcon}:last-child {
    position: absolute;
    top: 0;
  }
`;

export default Burger;
