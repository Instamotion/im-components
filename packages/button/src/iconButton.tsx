import React from 'react';
import styled from 'styled-components';
import Icon, { AvailableIcons } from '@im-ui/icon';
import Button from './button';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: AvailableIcons;
};

const ButtonIcon = styled(Icon)`
  padding-right: 0.5rem;
`;

export const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { icon, children } = props;
  return (
    <Button {...props}>
      <ButtonIcon iconName={icon} color="oil" />
      {children}
    </Button>
  );
};

export default IconButton;
