import * as React from 'react';
import styled, { css } from 'styled-components';
import theme from '@instamotion/theme';
import { FlattenSimpleInterpolation } from 'styled-components';

export type LoadingSpinnerProps = {
  size?: number;
  color?: string;
  centered?: boolean;
};

const positionCenter = (): FlattenSimpleInterpolation => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const Spinner = styled.div<LoadingSpinnerProps>`
  display: inline-block;
  ${({ centered }) =>
  centered
    ? positionCenter()
    : css`
          position: relative;
        `}
  ${({ size = 64 }) => css`
    width: ${size}px;
    height: ${size}px;
  `}

  & div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    ${({ color = theme.color.downy }) => css`
      background: ${color};
    `}
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = props => (
  <Spinner {...props}>
    <div />
    <div />
    <div />
    <div />
  </Spinner>
);

export default LoadingSpinner;
