import React from 'react';
import styled from 'styled-components';
import { AvailableColors } from '@im-ui/theme';
import Icon, { AvailableIcons } from '@im-ui/icon';

interface Props {
  className?: string;
  text?: string;
  path?: string;
  icon?: AvailableIcons;
}

export const LinkComponent: React.FC<Props> = ({ className, path, text, icon }) => {
  return (
    <MenuItemLink>
      <a href={path} className={className}>
        {icon && <Icon iconName={icon} size={14} color={AvailableColors.downy} />}
        {text}
      </a>
    </MenuItemLink>
  );
};

const MenuItemLink = styled.div`
  height: 16px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  text-transform: uppercase;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default LinkComponent;
