import React from 'react';
import styled from 'styled-components';
import Icon, { AvailableIcons } from '@im-ui/icon';
import Button, { ButtonProps } from './button';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    icon: AvailableIcons;
    size?: number;
  };

const ButtonIcon = styled(Icon)`
  font-size: 1rem;
  padding: 0 0.5rem;
  margin-left: 2rem;
`;

export const IconButton: React.FC<IconButtonProps> = ({
  buttonType = 'primary',
  icon,
  size,
  children,
  ...props
}) => {
  const color = buttonType === 'primary' ? 'oil' : 'downy';
  return (
    <Button buttonType={buttonType} {...props}>
      <ButtonIcon iconName={icon} size={size} color={color} />
      {children}
    </Button>
  );
};

export default IconButton;
