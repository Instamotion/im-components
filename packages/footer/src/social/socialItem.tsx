import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

interface Props {
  content: React.ReactElement;
}

const SocialItemComponent: React.FC<Props> = ({ content }) => <SocialItem>{content}</SocialItem>;

const SocialItem = styled.div`
  &&& {
    .romw-badge-single {
      background-color: ${theme.color.lightGrey};
      width: 100%;
      border: 0;
      box-shadow: none;
      padding-left: 0;
      ${theme.mediaQueries.whenTablet} {
        padding-top: 0;
      }
      ${theme.mediaQueries.whenDesktop} {
        padding-top: 2.5rem;
      }
    }
    .romw-badge-single__logo-text {
      display: none;
    }
    .romw-badge-single__start {
      display: none;
    }
    .romw-badge-single__rating-text {
      padding-top: 0.3125rem;
      opacity: 0.87;
      font-family: Roboto;
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.15px;
      color: ${theme.color.oil};
    }
    .romw-badge-single__reviews {
      opacity: 0.87;
      font-family: Roboto;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: 0.4px;
      color: ${theme.color.brightGrey};
    }
  }
  width: 50%;
  text-align: center;
  & svg {
    width: 2.7rem;
    height: 2.7rem;
  }
  ${theme.mediaQueries.whenTablet} {
    width: 100%;
    :first-of-type {
      margin-bottom: 0.6rem;
    }
    :last-child {
      margin-top: -2rem;
    }
  }
  ${theme.mediaQueries.whenDesktop} {
    :first-of-type {
      margin-bottom: 0;
      margin-left: -0.1rem;
    }
    :last-child {
      margin-right: 3rem;
      margin-top: 0;
    }
  }
`;

export default SocialItemComponent;
