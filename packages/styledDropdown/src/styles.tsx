import Icon from '@im-ui/icon';
import Label from '@im-ui/label';
import { IMTheme as theme } from '@im-ui/theme';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { OptionType } from '.';

type menuProps = {
  isOpen: boolean;
  hasError: boolean;
  isPhoneCode?: boolean;
  dropMenuBorder?: boolean;
  isActive?: boolean;
  isFloatLabel?: boolean;
};

const getSolidBSring = (color: string) => `border: solid 1px ${color};`;

export const Menu = styled.ul<menuProps>`
  background: ${theme.color.white};
  border-radius: 6px;
  border: 0;
  top: ${({ isFloatLabel }) => (isFloatLabel ? '3.1' : '5.3')}rem;
  box-sizing: border-box;
  cursor: auto;
  margin-top: 0;
  max-height: 22.5rem;
  overflow-x: hidden;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
  box-shadow: 0px 0px 4px rgba(54, 54, 54, 0.15);
  &::-webkit-scrollbar {
    background: transparent;
    width: 1.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.silver};
    border: 0.5rem solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }
`;

export const Item = styled.li<{
  disabled: boolean;
  isSelected: boolean;
  hasEditions: boolean;
  item: OptionType;
  highlighted: boolean;
}>`
  font-size: 1rem;
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  align-items: center;
  background-clip: border-box;
  border-top: none;
  color: ${theme.color.brightGrey};
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  padding-left: 1.5rem;
  white-space: normal;
  word-wrap: break-word;
  &:hover {
    background-color: ${theme.color.lighterGrey};
  }
  ${props =>
    props.hasEditions &&
    props.item.value &&
    !props.item.value.includes('_') &&
    css`
      padding-left: 3rem;
    `}
  ${props =>
    props.isSelected &&
    css`
      font-family: ${theme.font.bentonMedium.family};
      font-weight: ${theme.font.bentonMedium.weight};
    `};
  ${props =>
    props.disabled &&
    css`
      align-items: flex-end;
      height: 1.5rem;
      font-style: italic;
      font-size: 0.8rem;
      color: ${theme.color.silver};
      &:hover {
        background-color: ${theme.color.lighterGrey};
      }
    `};
  svg {
    flex-basis: 1.3rem;
  }

  :last-child {
    height: 2.5rem;
    line-height: 2.5rem;
  }
`;

type DropdownButtonType = {
  isPhoneCode?: boolean;
  isActive?: boolean;
  isOpen?: boolean;
  hasError?: boolean;
};

export const DropdownButton = styled.div<DropdownButtonType>`
  cursor: pointer;
  margin-left: auto;
  font-size: 0.75rem;
  ${({ isPhoneCode, isActive, isOpen, hasError }) =>
    isPhoneCode &&
    css`
      align-items: center;
      display: flex;
      height: calc(100% + 1.374rem);
      ${theme.mediaQueries.whenTablet} {
        height: calc(100% + 1.624rem);
      }
      padding-right: 0.5rem;
      border-right-width: 0.0625rem;
      border-right-style: solid;
      ${() => {
        if (isOpen) return `border-right-color: ${theme.color.secondary};`;
        if (hasError) return `border-right-color: ${theme.color.signal};`;
        if (isPhoneCode || isActive) return `border-right-color: ${theme.input.border.color};`;
      }}
    `}
`;

type containerProps = {
  isOpen: boolean;
  disabled?: boolean;
  hasError: boolean;
  isActive?: boolean;
  isPhoneCode?: boolean;
  haveValue?: boolean;
};

export const DropdownContainer = styled.div<containerProps>`
  align-items: center;
  border-radius: 6px;
  border: solid 1px transparent;
  background-color: ${theme.color.lighterGrey};
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  color: ${theme.color.typo};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 3rem;
  padding: 0.687rem 0.625rem;
  position: relative;
  user-select: none;
  z-index: 1;
  ${({ disabled, hasError }) =>
    disabled
      ? `opacity: 0.45;`
      : !hasError &&
        `
    :hover {
      ${getSolidBSring(theme.input.border.color)}
    }
  `}
  ${({ haveValue, disabled }) =>
    haveValue && !disabled && `background-color: ${theme.color.white};`}

  ${({ hasError, isPhoneCode, isOpen, isActive, haveValue }) => {
    if (isOpen)
      return `${getSolidBSring(theme.color.secondary)}
      background-color: ${theme.color.white};
      :hover {
        ${getSolidBSring(theme.color.secondary)}
      }
    `;
    if (hasError) return getSolidBSring(theme.color.signal);
    if (isPhoneCode || isActive) return getSolidBSring(theme.input.border.color);
    if (haveValue) return `${getSolidBSring(theme.input.border.color)}`;
  }};

  ${theme.mediaQueries.whenTablet} {
    height: 3.125rem;
    padding: 0.812rem 1.375rem;
  }
`;

export const DropdownInput = styled.input<{ disabled?: boolean }>`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: transparent;
  color: ${theme.color.oil};
  font-size: 1rem;
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  &:focus {
    outline: none;
  }
  ${props =>
    props.disabled &&
    css`
      color: ${theme.color.silver};
    `}

  &:after {
    content: '';
  }
`;

export const DropdownIcon = styled(Icon)`
  margin-right: 1rem;
`;

export const DropdownLabel = styled.div`
  user-select: none;
`;

export const ErrorMessage = styled.span<{ isAbsoluteError?: boolean }>`
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  color: ${theme.color.signal};
  font-size: 0.625rem;
  margin: 0.5rem 0 0 0.5rem;
  ${({ isAbsoluteError }) =>
    isAbsoluteError &&
    `
    position: absolute;
    top: 3;

    ${theme.mediaQueries.whenTablet} {
      top: 3.125rem;
    }
  `}
`;

export const StyledLabel = styled(Label)``;

export const StyledDropdownWrapper = styled.div<{
  isOpen: boolean;
  selectStyles: FlattenSimpleInterpolation;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  ${StyledLabel} {
    order: 1;
  }
  ${DropdownContainer} {
    order: 2;
  }
  ${ErrorMessage} {
    order: 3;
  }
  ${props =>
    props.isOpen &&
    `
   label.floated {
    transform: translate(1rem, -0.6rem) scale(.75);
    color: ${theme.color.secondary} !important;
    opacity: 1;
    display: inline;

      .asterisk {
        display: inline;
        color: ${theme.color.secondary};
      }
      .float-bg {
        display: block;
      }
    }
  `}
  ${({ selectStyles }) => selectStyles};
`;
