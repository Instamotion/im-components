import { IMTheme as theme } from '@im-ui/theme';
import styled from 'styled-components';
import Label from '@im-ui/label';

export const ErrorMessage = styled.span`
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  color: ${theme.color.signal};
  font-size: 0.625rem;
  margin-top: 0.5rem;
`;

export const Checkmark = styled.label<{ error: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
  margin-left: -1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 1rem;
  border: 1px solid ${theme.color.whiteGrey};
  background-color: ${theme.color.white};
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -63%, 0) rotate(45deg);
    width: 0.225rem;
    height: 0.7375rem;

    border: solid #000;
    border-width: 0 1.5px 1.5px 0;
  }

  ${props => props.error && `border-color: ${theme.color.signal};`} :hover {
    border-color: ${theme.color.secondary};
  }
`;

export const StyledLabel = styled(Label)`
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  font-size: 0.625rem;
  color: ${theme.color.typo};
`;

export const CheckboxWrapper = styled.div`
  padding-left: 1.25rem;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  display: none;
`;

export const CheckboxControl = styled.span`
  display: inline-flex;
  position: relative;
  user-select: none;
  flex-direction: column;

  & input:checked ~ ${Checkmark}::after {
    border-color: ${theme.color.white};
    display: block;
  }
  & input:checked ~ ${Checkmark} {
    border-color: ${theme.color.secondary};
    background-color: ${theme.color.secondary};
  }
`;
