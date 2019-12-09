import React from 'react';
import styled from 'styled-components';
import { AvailableColors } from '@im-ui/theme';
import Icon, { IconWrapper, AvailableIcons } from '@im-ui/icon';
import TagManager, { DataLayerArgs } from 'react-gtm-module';

interface Props {
  className?: string;
  text?: JSX.Element | string;
  color: AvailableColors;
  colorHover: AvailableColors;
  path?: string;
  icon?: AvailableIcons;
  track?: string;
}

export const LinkComponent: React.FC<Props> = ({ className, path, text, icon, track }) => {
  const tag = (): void => {
    if (!track) return;
    const dataLayer: DataLayerArgs = {
      dataLayer: {
        event: track
      }
    };
    TagManager.dataLayer(dataLayer);
  };

  return (
    <a href={path} className={className} onClick={() => tag()}>
      {icon && <Icon iconName={icon} size={16} color={'downy'} />}
      {text}
    </a>
  );
};

const Link = styled(LinkComponent)`
  display: flex;
  color: ${({ color }) => AvailableColors[color]};
  text-transform: uppercase;
  margin-right: 1.5rem;
  transition: color 0.2s ease;
  text-decoration: none;
  ${IconWrapper} {
    margin-bottom: 0.1rem;
    margin-right: 0.5rem;
  }
  span {
    margin-right: 0.25rem;
    transition: color 0.2s ease;
  }
  &:hover {
    color: ${({ colorHover }) => AvailableColors[colorHover]};
  }
`;

export default Link;
