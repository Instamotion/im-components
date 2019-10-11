import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

export interface LabelProps {
  className?: string;
  id?: string;
  required?: boolean;
  htmlFor?: string;
}

export const RequiredLabel = styled.span`
  padding-left: 0.5rem;
  color: ${theme.color.flamePea};
  font-weight: bold;
`;

export const LabelComponent = styled.label`
  display: flex;
  cursor: pointer;
  padding: 0 1rem 0.5rem;
`;

export const Label: React.FC<LabelProps> = ({ required, children, htmlFor }) => (
  <LabelComponent htmlFor={htmlFor}>
    {children}
    {required && <RequiredLabel> *</RequiredLabel>}
  </LabelComponent>
);

export default Label;
