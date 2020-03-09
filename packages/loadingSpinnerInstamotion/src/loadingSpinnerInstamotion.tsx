import React from 'react';
import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';

export type LoadingSpinnerInstamotionProps = {
  centered?: boolean;
};

const positionCenter = (): FlattenSimpleInterpolation => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const Spinner = styled.img<LoadingSpinnerInstamotionProps>`
  display: inline-block;
  width: 64px;
  height: 64px;

  ${({ centered }) =>
    centered
      ? positionCenter()
      : css`
          position: relative;
        `}
`;

const LoadingSpinnerInstamotion: React.FC<LoadingSpinnerInstamotionProps> = props => (
  <Spinner {...props} src="https://cdn.instamotion.com/images/loading-spinner.gif" />
);

export default LoadingSpinnerInstamotion;
