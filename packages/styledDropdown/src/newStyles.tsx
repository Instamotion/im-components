import Icon from '@im-ui/icon';
import { IMTheme as theme } from '@im-ui/theme';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { OptionType } from '.';

export const StyledDropdownWrapper = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  position: relative;
  ${({ selectStyles }: { selectStyles: FlattenSimpleInterpolation }) => selectStyles};
`;

type menuProps = {
  isOpen: boolean;
  hasError: boolean;
  isPhoneCode?: boolean;
  dropMenuBorder?: boolean;
};

export const Menu = styled.ul<menuProps>`
  background: ${theme.color.lighterGrey};
  ${({ hasError, isPhoneCode, isOpen, dropMenuBorder }) => {
    if (hasError) return 'border: solid 1px ' + theme.color.signal;
    if ((isPhoneCode || dropMenuBorder) && isOpen)
      return 'border: solid 1px ' + theme.input.border.color;
  }};
  border-top: 0;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: auto;
  margin-top: 0;
  max-height: 22.5rem;
  overflow-x: hidden;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
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
  ${({ isOpen }) =>
    !isOpen &&
    css`
      border: 0;
    `}
`;

export const Item = styled.li<{
  disabled: boolean;
  isSelected: boolean;
  hasEditions: boolean;
  item: OptionType;
  highlighted: boolean;
}>`
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
    background-color: ${theme.color.lightGrey};
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
      font-weight: bold;
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
  hasError: boolean;
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
      ${() =>
        hasError && isPhoneCode
          ? `
      border-right-color: ${theme.color.signal};
    `
          : `
      border-right-color: ${!hasError && isPhoneCode ? theme.input.border.color : 'transparent'};
    `}
    `}
`;

type containerProps = {
  isOpen: boolean;
  disabled?: boolean;
  hasError: boolean;
  isActive?: boolean;
  isPhoneCode?: boolean;
  dropMenuBorder?: boolean;
};

export const DropdownContainer = styled.div<containerProps>`
  align-items: center;
  border-radius: 6px;
  background-color: ${theme.color.lighterGrey};
  ${({ hasError, isPhoneCode, dropMenuBorder }) => {
    if (hasError) return 'border: solid 1px ' + theme.color.signal;
    if (isPhoneCode || dropMenuBorder) return 'border: solid 1px ' + theme.input.border.color;
  }};
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
  ${theme.mediaQueries.whenTablet} {
    height: 3.125rem;
    padding: 0.812rem 1.375rem;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

export const DropdownInput = styled.input`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: transparent;
  color: ${theme.color.brightGrey};
  font-size: 1rem;
  font-family: ${theme.font.sans.family};
  &:focus {
    outline: none;
  }
  ${(props: { disabled?: boolean }) =>
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
