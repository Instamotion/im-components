import Icon from '@im-ui/icon';
import { IMTheme as theme } from '@im-ui/theme';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { OptionType } from '.';

const StyledDropdownWrapper = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  position: relative;
  ${({ selectStyles }: { selectStyles: FlattenSimpleInterpolation }) => selectStyles};
`;

type menuProps = { isOpen: boolean; hasError: boolean };

const Menu = styled.ul<menuProps>`
  background: #fff;
  border: solid 0.0625rem ${({ hasError }) => (hasError ? theme.color.flamePea : theme.color.downy)};
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

export const Item = styled.li`
  align-items: center;
  background-clip: border-box;
  border-top: none;
  color: ${theme.color.brightGrey};
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  padding-left: 1.125rem;
  white-space: normal;
  word-wrap: break-word;
  &:hover {
    background-color: ${theme.color.lightGrey};
  }
  ${(props: { isSelected: boolean; hasEditions: boolean; item: OptionType }) =>
    props.hasEditions &&
    props.item.value &&
    !props.item.value.includes('_') &&
    `
      padding-left: 2.125rem;
  `}
  ${(props: { isSelected: boolean; hasEditions: boolean; item: OptionType }) =>
    props.isSelected &&
    css`
      font-weight: bold;
    `};
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
  margin-right: 0.5rem;
  ${({ isPhoneCode, isActive, isOpen, hasError }) =>
    isPhoneCode &&
    css`
      align-items: center;
      display: flex;
      height: 100%;
      padding-right: 0.5rem;
      border-right-width: 0.0625rem;
      border-right-style: solid;
      ${() =>
        hasError
          ? `
      border-right-color: ${theme.color.flamePea};
    `
          : `
      border-right-color: ${isActive || isOpen ? theme.color.downy : theme.input.border.color};
    `}
    `}
`;

type containerProps = {
  isOpen: boolean;
  disabled?: boolean;
  hasError: boolean;
  isActive?: boolean;
};

const DropdownContainer = styled.div<containerProps>`
  align-items: center;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ hasError }) =>
    hasError ? theme.color.flamePea : theme.color.silver};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  padding: .25rem 0 .25rem 1.125rem;
  position: relative;
  user-select:none;
  z-index: 1;
  ${({ isOpen, disabled, hasError }) =>
    !isOpen &&
    !disabled &&
    css`
      &:hover {
        box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
        border: 0.0625rem solid ${hasError ? theme.color.flamePea : theme.color.downy};

        ${DropdownButton} {
          border-color: ${hasError ? theme.color.flamePea : theme.color.downy};
        }
      }
    `}
  ${({ isOpen, disabled, hasError }) =>
    isOpen &&
    css`
      transform: rotateZ(0);
      border-radius: 0.25rem 0.25rem 0 0;
      border: solid 0.0625rem ${hasError ? theme.color.flamePea : theme.color.downy};
      border-bottom: 0.0625rem solid transparent;
      &:after {
        content: '';
        width: calc(100% - 1rem);
        height: 100%;
        border-bottom: 0.0625rem solid ${hasError ? theme.color.flamePea : theme.color.downy};
        display: inline-block;
        margin-left: 0.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      &:focus {
        outline: none;
      }
    `}
  ${({ isOpen, disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
  ${({ isActive, isOpen, hasError }) =>
    isActive &&
    !isOpen &&
    css`
      border-color: ${hasError ? theme.color.flamePea : theme.color.downy};
    `}
`;

const NewDropdownContainer = styled.div<containerProps>`
  align-items: center;
  border-radius: 6px;
  background-color: ${theme.color.lighterGrey};
  ${({ hasError }) => (hasError ? 'border: 1rem solid ' + theme.color.signal : 'none')};
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
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
`;

const DropdownInput = styled.input`
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

const DropdownIcon = styled(Icon)`
  margin-right: 1rem;
`;

export const DropdownLabel = styled.div`
  user-select: none;
`;
