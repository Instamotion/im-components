import React from 'react';
import styled, { css } from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';

export type Placement = 'stack' | 'inline';

export interface LabelProps {
  text: JSX.Element | string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  className?: string;
  placement?: Placement;
  isFloatLabel?: boolean;
  haveValue?: boolean;
}

const LabelComponent = styled.label<LabelProps>`
  font-family: ${theme.font.bentonBold.family};
  font-weight: ${theme.font.bentonBold.weight};
  line-height: 1.625rem;
  color: ${theme.color.typo};
  font-size: 1rem;
  cursor: pointer;
  ${({ placement = 'stack' }) =>
    css`
      margin-bottom: ${placement === 'stack' ? '0.5rem' : '0'};
    `}
  ${({ disabled }) => css`
    color: ${disabled ? theme.color.silver : theme.color.typo};
  `}
  color: ${({ error }) => (error ? theme.color.signal : theme.color.typo)};

  ${({ isFloatLabel, haveValue, error }) =>
    isFloatLabel &&
    `font-family: ${theme.font.bentonRegular.family};
    font-weight: ${theme.font.bentonRegular.weight};
    position: absolute;
    transform-origin: top left;
    transform: translate(0.625rem, 0.687rem) scale(1);
    transition: all .1s ease-in-out;
    z-index: 10;
    color: ${theme.color.typography};
    opacity: 0.6;

    ${theme.mediaQueries.whenTablet} {
      ${!haveValue && 'transform: translate(1.375rem, 0.812rem) scale(1);'}
    }

    &.value {
      transform: translate(1rem, -0.6rem) scale(.75);
      opacity: 1;

      .asterisk {
        display: inline;
      }

      .float-bg {
        display: block;
      }
    }

    ${error &&
      `
      &.value {
        transform: translate(1rem, -0.6rem) scale(.75);
        opacity: 1;
        color: ${theme.color.signal};

        .float-bg {
          display: block;
        }
      }
    `}
  `}
`;

const FloatBG = styled.div`
  display: none;
  height: 0.625rem;
  width: calc(100% + 1.25rem);
  background-color: ${theme.color.white};
  z-index: 1;
  margin-top: -0.875rem;
  margin-left: -0.625rem;
`;

const Asterisk = styled.span<{ disabled: boolean | undefined; error?: boolean }>`
  padding-left: 0.2rem;
  color: ${({ disabled }) => (disabled ? theme.color.silver : theme.color.typo)};
  color: ${({ error }) => (error ? theme.color.signal : theme.color.typo)};
`;

const Label: React.FC<LabelProps> = props => (
  <LabelComponent
    {...props}
    className={`${props.isFloatLabel && 'floated '}${!!props.haveValue && 'value'}`}
  >
    <span>{props.text}</span>
    {props.required && (
      <Asterisk disabled={props.disabled} error={props.error} className="asterisk">
        *
      </Asterisk>
    )}
    {props.isFloatLabel && <FloatBG className="float-bg" />}
  </LabelComponent>
);

export default Label;
