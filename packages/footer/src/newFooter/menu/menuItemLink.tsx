import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import { IconStyled } from '@im-ui/icon';
import { trackingLogEvent } from '../../helpers/tracking';

interface Props {
  inline: boolean;
  icon: React.ReactNode;
  path?: string;
  title?: JSX.Element | string;
  blank?: boolean;
  track?: string;
  clickHandler?: (event: React.MouseEvent<EventTarget>) => void;
}

const MenuItemLinkComponent: React.FC<Props> = ({
  inline,
  icon,
  path,
  title,
  track,
  clickHandler
}) => {
  const tag = (event: React.MouseEvent<EventTarget>): void => {
    if (clickHandler) {
      clickHandler(event);
    }
    if (track) {
      trackingLogEvent(track);
    }
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

const MenuItemIcon = styled.span<{ inline: boolean }>`
  :hover {
    svg {
      IconWrapper path {
        fill: ${props => (props.inline ? theme.color.downy : theme.color.silver)};
      }
    }
  }
`;

const MenuItemLink = styled.div<{ inline: boolean }>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};

  ${IconStyled} {
    padding-right: 0.5rem;
  }

  & a {
    text-decoration: none;
    color: ${theme.color.typo};
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 2rem;
    :hover {
      color: ${theme.color.primary};
    }
  }
`;

export default MenuItemLinkComponent;
