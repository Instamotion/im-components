import React from 'react';
import styled from 'styled-components';
import { AvailableColors } from '@im-ui/theme';
import Icon, { AvailableIcons } from '@im-ui/icon';

interface Props {
  className?: string;
  text?: JSX.Element | string;
  color: AvailableColors;
  colorHover: AvailableColors;
  path?: string;
  icon?: AvailableIcons;
}

export const LinkComponent: React.FC<Props> = ({ className, path, text, icon }) => {
  return (
    <a href={path} className={className}>
      {icon && <Icon iconName={icon} size={16} color={'downy'} />}
      {text}
    </a>
  );
};

const Link = styled(LinkComponent)`
  font-weight: 500;
  display: flex;
  color: ${({ color }) => AvailableColors[color]};
  text-transform: uppercase;
  margin-right: 1.5rem;
  transition: color 0.2s ease;
  text-decoration: none;
  span {
    margin-right: 0.25rem;
    transition: color 0.2s ease;
  }
  &:hover {
    color: ${({ colorHover }) => AvailableColors[colorHover]};
  }
`;

export default Link;
