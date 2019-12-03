import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';
import { FormattedMessage } from 'react-intl';

export interface LabelProps {
  messageId: string;
  required?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  className?: string;
}

export const LabelComponent = styled.label`
  font-size: 0.75rem;
  color: ${theme.color.brightGrey};
  font-weight: bold;
  display: flex;
  cursor: pointer;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  user-select: none;
  ${(props: { disabled?: boolean }) =>
    props.disabled &&
    css`
      color: ${theme.color.silver};
    `}
`;

const Label: React.FC<LabelProps> = ({ required, messageId, ...props }) => (
  <LabelComponent {...props}>
    <FormattedMessage id={messageId} />
    {required && '*'}
  </LabelComponent>
);

export default Label;
