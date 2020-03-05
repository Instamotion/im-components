import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Icon from '@im-ui/icon';
import theme, { AvailableColors } from '@im-ui/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';

import Button, { ButtonProps, ButtonTypes } from '../src/';

const buttonVariants: Array<ButtonTypes> = ['primary', 'secondary'];

// type IconProps = {
//   size?: 'sm' | 'lg';
// }

// const IconStyle = styled.svg<IconProps>`
//   display: inline-block;
//   margin-right: 0.5em;
//   ${({size}) =>
//     {
//       switch(size) {
//         case 'sm':
//           return css`
//             height: 0.875em;
//             vertical-align: -0.125em;
//           `;
//         case 'lg':
//           return css`
//             height: 1.3333333333em;
//             vertical-align: -0.225em;
//           `;
//         default:
//           return css`
//             height: 1em;
//             vertical-align: -0.125em;
//           `;
//       }
//     }
//   }
// `;

// const Icon: React.FC<IconProps> = (props) => {
//   return (
//     <IconStyle {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//       <path fill="currentColor"
//         d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"
//       />
//     </IconStyle>
//   )
// }

storiesOf('Button', module)
  .add('with text', () => {
    const props: ButtonProps = {
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0])
    };
    return <Button {...props}>{text('Label', 'Hello World')}</Button>;
  })
  .add('full width ', () => {
    const props: ButtonProps = {
      sizing: 'full-width',
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0])
    };
    return <Button {...props}>{text('Label', 'Hello World')}</Button>;
  })
  .add('with text and icon v2', () => {
    const props: ButtonProps = {
      sizing: 'full-width',
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0])
    };
    return (
      <Button {...props}>
        {text('Label', 'Hello World')}
        {/* <Icon icon="" /> */}
      </Button>
    );
  })
  .add('with text and font awesome', () => {
    const props: ButtonProps = {
      sizing: 'full-width',
      onClick: action('Button click'),
      disabled: boolean('Disabled', false),
      buttonType: select('variant', buttonVariants, buttonVariants[0])
    };
    return (
      <Button {...props}>
        {text('Label', 'Hello World')}
        <FontAwesomeIcon icon={faAd} style={{ padding: '0 0 0 0.5rem' }} />
      </Button>
    );
  });
