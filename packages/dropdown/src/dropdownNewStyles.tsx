import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Label from '@im-ui/label';

export const ErrorMessage = styled.span`
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  color: ${theme.color.signal};
  font-size: 0.625rem;
  margin-top: 0.5rem;
`;

export const StyledLabel = styled(Label)``;

export const DropdownComponent = styled.span`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-bottom: 2rem;
`;

export const AngleIcon = styled.span`
  display: block;
  position: absolute;
  pointer-events: none;
  right: 0.75rem;
  top: 25%;
  color: ${theme.color.oil};
  &::before {
    content: '';
    width: 0.0625rem;
    height: 0.5rem;
    position: absolute;
    transform: rotate(-45deg);
    top: 0.5rem;
    right: 0.7rem;
    background-color: ${theme.color.oil};
  }
  &::after {
    content: '';
    width: 0.0625rem;
    height: 0.5rem;
    position: absolute;
    transform: rotate(45deg);
    top: 0.5rem;
    right: 0.35rem;
    background-color: ${theme.color.oil};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownSelect = styled.select<{ error: boolean; value: any; defaultValue: any }>`
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 6px;
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  font-size: 1rem;
  background-color: ${theme.color.lighterGrey};
  color: ${theme.color.typo};
  border: none;
  width: 100%;
  height: 3rem;
  padding: 0.687rem 0.625rem;
  margin: 0;
  outline: 0;

  ${theme.mediaQueries.whenTablet} {
    height: 3.125rem;
    padding: 0.812rem 1.375rem;
  }

  ${({ value, defaultValue }) =>
    (value || defaultValue) &&
    `border: ${theme.input.border.width}px solid ${theme.input.border.color};`}
  ${({ error }) =>
    error && `border: ${theme.input.border.width}px solid ${theme.color.signal};`}

  &:focus {
    border: ${theme.input.border.width}px solid ${theme.color.secondary};
  }

  &.touched:invalid {
    border: ${theme.input.border.width}px solid ${theme.color.signal};
  }
`;
