import styled from 'styled-components';
import theme from '@im-ui/theme';

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
  color: ${theme.color.niagara};
  &::before {
    content: '';
    width: 0.0625rem;
    height: 0.5rem;
    position: absolute;
    transform: rotate(-45deg);
    top: 0.5rem;
    right: 0.7rem;
    background-color: ${theme.color.niagara};
  }
  &::after {
    content: '';
    width: 0.0625rem;
    height: 0.5rem;
    position: absolute;
    transform: rotate(45deg);
    top: 0.5rem;
    right: 0.35rem;
    background-color: ${theme.color.niagara};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownSelect = styled.select`
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  border: ${theme.input.border.width}px solid ${theme.input.border.color};
  border-radius: 4px;
  font-family: ${theme.font.sans.family};
  font-size: ${theme.input.font.size}px;
  background-color: ${theme.color.white};
  color: ${theme.color.oil};
  width: 100%;
  padding: 1rem 0.5rem;
  margin: 0;
  outline: 0;

  &:focus {
    border-color: ${theme.color.downy};
  }

  &.touched:invalid {
    border-color: ${theme.color.flamePea};
  }

  ${theme.mediaQueries.whenTablet} {
    padding: 1rem;
  }
`;
