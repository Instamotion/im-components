import React, { useEffect } from 'react';
import styled from 'styled-components';
import Label from '@im-ui/label';
import theme from '@im-ui/theme';

export type ClickChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLLabelElement>;

export interface ToggleProps {
  id: string;
  name?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  messageId?: string;
  onChange?: (checked: boolean, e: ClickChangeEvent) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  id,
  checked = false,
  disabled = false,
  onChange,
  className,
  messageId,
  value
}) => {
  const [state, setState] = React.useState(checked);
  const handleOnChange = (e: ClickChangeEvent): void => {
    if (onChange && !disabled) {
      setState(!state);
      onChange(!state, e);
    }
  };

  useEffect(() => {
    setState(checked);
  }, [checked]);

  return (
    <ToggleControl className={className}>
      {messageId && <WrapperLabel messageId={messageId} />}
      <ToggleInput
        type="checkbox"
        id={id}
        name={id}
        value={value}
        checked={state}
        disabled={disabled}
        onChange={handleOnChange}
      />
    </ToggleControl>
  );
};

export const ToggleControl = styled.span`
  position: relative;
  display: flex;
  align-items: center;
`;

export const WrapperLabel = styled(Label)`
  margin-bottom: 0;
  padding-right: 1rem;
`;

export const ToggleInput = styled.input`
  position: relative;
  appearance: none;
  outline: none;
  width: 2.5rem;
  height: 1.25rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.silver};
  border-radius: 0.625rem;
  cursor: pointer;
  margin: 0;
  transition-duration: 0.2s;

  ::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 1rem;
    height: 1rem;
    background-color: ${theme.color.silver};
    border-radius: 50%;
    transition-duration: 0.2s;
  }

  &:checked {
    background-color: ${theme.color.downy};
    border-color: ${theme.color.downy};
  }

  &:checked::after {
    left: 1.25rem;
    background-color: ${theme.color.white};
  }
`;

export default Toggle;
