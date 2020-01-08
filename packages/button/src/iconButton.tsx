import React from 'react';
import styled from 'styled-components';
import Icon, { AvailableIcons } from '@im-ui/icon';
import Button, { ButtonProps } from './button';

export type IconPosition = 'left' | 'right';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    icon: AvailableIcons;
    size?: number;
    iconPosition?: IconPosition;
  };

const ButtonIconLeft = styled(Icon)`
  padding: 0 0.5rem 0 0;
`;

const ButtonIconRight = styled(Icon)`
  padding: 0 0 0 0.5rem;
`;

export const IconButton: React.FC<IconButtonProps> = ({
  buttonType = 'primary',
  icon,
  size,
  children,
  iconPosition = 'left',
  ...props
}) => {
  const color = buttonType === 'primary' ? 'oil' : 'downy';
  return (
    <Button buttonType={buttonType} {...props}>
      {iconPosition === 'left' ? (
        <>
          <ButtonIconLeft iconName={icon} size={size} color={color} />
          {children}
        </>
      ) : (
        <>
          {children}
          <ButtonIconRight iconName={icon} size={size} color={color} />
        </>
      )}
    </Button>
  );
};

export default IconButton;
