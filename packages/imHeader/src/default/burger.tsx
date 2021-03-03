import React from 'react';
import styled from 'styled-components';
import Icon from '@im-ui/icon';
import theme from '@im-ui/theme';
import TagManager, { DataLayerArgs } from 'react-gtm-module';

interface Props {
  className?: string;
  isOpen: boolean;
  clickedCb: () => void;
}

export const BurgerComponent: React.FC<Props> = ({ className, isOpen, clickedCb }) => {
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
    <BurgerWrapp className={className} onClick={tag}>
      <MenuIconWrapper isVisible={!isOpen}>
        <Icon icon={'bars'} color={'white'} />
      </MenuIconWrapper>
      <MenuIconWrapper isVisible={isOpen}>
        <Icon icon={'times'} color={'white'} />
      </MenuIconWrapper>
    </BurgerWrapp>
  );
};

const visibleCss = `
  transform: rotate(-180deg);
  opacity: 1;
  visibility: visible;
`;

const MenuIconWrapper = styled.div<{ isVisible: boolean }>`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s ease, opacity 0.2s ease, transform 0.3s ease,
    -webkit-transform 0.3s ease;
  ${props => (props.isVisible ? visibleCss : null)}
`;

const BurgerWrapp = styled.div`
  display: block;
  position: relative;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
  ${MenuIconWrapper}:first-child {
    position: relative;
    top: -0.15rem;
    svg {
      height: 1rem;
    }
  }
  ${MenuIconWrapper}:last-child {
    position: absolute;
    top: -0.35rem;
    svg {
      height: 1.5rem;
    }
  }
`;

export default BurgerComponent;
