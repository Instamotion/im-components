import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import { FormattedMessage } from 'react-intl';
import { trackingError } from './tracking';

export interface ErrorProps {
  statusCode: number;
  className?: string;
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  trackingError(statusCode);
  return (
    <ErrorWrapp>
      <TitleMain>
        <FormattedMessage id={`page${statusCode}.line_one`} />
      </TitleMain>
      <TitleSecondary>
        <FormattedMessage id={`page${statusCode}.line_two`} />
      </TitleSecondary>
      <ImgBlock statusCode={statusCode} />
    </ErrorWrapp>
  );
};

const ErrorWrapp = styled.div`
  text-align: center;
  max-width: 53.75rem;
  margin: 0 auto 3rem;
  width: 100%;
  ${theme.mediaQueries.whenTablet} {
    margin-bottom: 5rem;
    padding-top: 0;
    min-height: 40rem;
  }
  ${theme.mediaQueries.whenDesktop} {
    max-width: 63.675rem;
  }
`;

const TitleMain = styled.h2`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 6rem 0 0;
  color: ${theme.color.brightGrey};
`;

const TitleSecondary = styled.h3`
  font-size: 2rem;
  margin: 0 0 2rem;
  font-weight: 500;
  color: ${theme.color.brightGrey};
`;

const ImgBlock = styled.div<ErrorProps>`
  width: 100%;
  height: 27rem;
  position: relative;
  &::after {
    content: '';
    background-image: ${props =>
      `url(${
        props.statusCode === 500
          ? 'https://cdn.instamotion.com/images/500_mobile.svg'
          : 'https://cdn.instamotion.com/images/404_mobile.svg'
      })`};
    background-repeat: no-repeat;
    background-size: auto auto;
    width: 20rem;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    ${theme.mediaQueries.whenDesktop} {
      width: 53.75rem;
      background-image: ${props =>
        `url(${
          props.statusCode === 500
            ? 'https://cdn.instamotion.com/images/500_desktop.svg'
            : 'https://cdn.instamotion.com/images/404_desktop.svg'
        })`};
    }
  }
`;

export default Error;
