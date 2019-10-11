import * as React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';
import { IconWrapper } from '@instamotion/icon';
import TagManager, { DataLayerArgs } from 'react-gtm-module';

interface Props {
  inline: boolean;
  icon: React.ReactNode;
  path?: string;
  title?: JSX.Element | string;
  blank?: boolean;
  track?: string;
}

const MenuItemLinkComponent: React.FC<Props> = ({ inline, icon, path, title, track }) => {
  const tag = (): void => {
    const dataLayer: DataLayerArgs = {
      dataLayer: {
        event: track
      }
    };
    TagManager.dataLayer(dataLayer);
  };

  return (
    <MenuItemLink inline={inline}>
      <a href={path} onClick={tag}>
        {icon && <MenuItemIcon inline={inline}>{icon}</MenuItemIcon>}
        {title}
      </a>
    </MenuItemLink>
  );
};

const MenuItemIcon = styled.span`
  :hover {
    svg {
      path {
        fill: ${(props: { inline: boolean }) =>
          props.inline ? theme.color.downy : theme.color.silver};
      }
    }
  }
`;

const MenuItemLink = styled.div`
  display: ${(props: { inline: boolean }) => (props.inline ? 'inline-block' : 'block')};

  ${IconWrapper} {
    padding-right: 0.5rem;
  }

  & a {
    text-decoration: none;
    color: ${theme.color.oil};
    font-size: 1rem;
    line-height: 1.92rem;
    :hover {
      color: ${theme.color.downy};
    }
  }
`;

export default MenuItemLinkComponent;
