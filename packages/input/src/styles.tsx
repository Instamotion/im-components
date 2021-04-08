import styled, { css } from 'styled-components';
import Label from '@im-ui/label';
import { IMTheme as theme } from '@im-ui/theme';
import Icon from '@im-ui/icon';

type StyledInputType = {
  value: string | number;
  error?: boolean;
  isPhone?: boolean;
  isFloatLabel?: boolean;
  disabled?: boolean;
};

export const StyledLabel = styled(Label)``;

export const StyledInput = styled.div<StyledInputType>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${theme.color.lighterGrey};
  border-radius: 6px;
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  font-size: ${theme.input.font.size}px;
  padding: 0.687rem 0.625rem;
  color: ${theme.color.typography};
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid ${theme.color.lighterGrey}

  ${props =>
    !props.isPhone &&
    !props.disabled &&
    !props.error &&
    `
    :hover {
      border: 1px solid ${theme.color.typography};
    }
  `}

  ${props =>
    props.disabled &&
    `
    background-color: ${theme.color.lighterGrey};
  `}

  ${props =>
    props.value &&
    !props.isPhone &&
    `
    border: 1px solid ${theme.input.border.color};
    background-color: ${theme.color.white};
  `}

  &:focus-within {
    ${props => {
      if (props.isPhone) {
        return css`
          .phone-dropdown,
          .phone-dropdown-menu,
          .phone-dropdown-button {
            border-color: ${theme.color.secondary} !important;
          }
        `;
      } else {
        return props.isFloatLabel
          ? `border: 1px solid ${theme.color.secondary};
            background-color: ${theme.color.white};`
          : `border: 1px solid ${theme.color.secondary};`;
      }
    }}
      + label.floated {
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
    }
  }

  ${theme.mediaQueries.whenTablet} {
    height: 3.125rem;
    padding: 0.812rem 1.375rem;
  }

  ${props =>
    (props.error &&
      !props.isPhone &&
      `
    border: 1px solid ${theme.color.signal};
  `) ||
    (props.error &&
      props.isPhone &&
      `
    .phone-dropdown {
      border: 1px solid ${theme.color.signal};
    }
  `)}
`;

export const InputElements = styled.input<{ type: string }>`
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  height: inherit;
  width: 100%;
  padding: 0;
  ${({ type }) =>
      type === 'tel' &&
      `
    z-index: 1;
    flex: none;
    margin-left: 5rem;
    width: calc(100% - 8rem);
    padding-left: .5rem;
    
    &+svg {
      z-index: 1;
    }
    
    ${theme.mediaQueries.whenTablet} {
      margin-left: 5.5rem;
    }
  `}
    :focus {
    outline: none;
  }
`;

export const StyledIcon = styled(Icon)`
  cursor: pointer;
  color: ${theme.color.oil};
`;

export const ErrorMessage = styled.span`
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  color: ${theme.color.signal};
  font-size: 0.625rem;
  margin-top: 0.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 2rem;
`;

export const InputComponentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-bottom: 1rem;
  ${StyledLabel} {
    order: 1;
  }
  ${StyledInput} {
    order: 2;
  }
  ${ErrorMessage} {
    order: 3;
  }
`;
