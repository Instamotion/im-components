import React from 'react';
import styled from 'styled-components';
import Icon, { AvailableIcons } from '@im-ui/icon';
import Button from './button';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: AvailableIcons;
};

const ButtonIcon = styled(Icon)`
  font-size: 14px;
  padding: 0 8px;
  margin-left: -30px;
`;

export const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { icon, children } = props;
  return (
    <Button {...props}>
      <ButtonIcon iconName={icon} color="white" />
      {children}
    </Button>
  );
};

export default IconButton;
