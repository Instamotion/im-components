import * as React from 'react';
import styled, { css } from 'styled-components';

const Icons = {
  arrowCircleLeft: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
      />
    </svg>
  ),
  file: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path
        fill={color}
        d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"
      />
    </svg>
  ),
  infoCircle: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
      />
    </svg>
  ),
  shield: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M163.2 230.5c-4.7-4.7-12.3-4.7-17-.1l-22.7 22.5c-4.7 4.7-4.7 12.3-.1 17l90.8 91.5c4.7 4.7 12.3 4.7 17 .1l172.6-171.2c4.7-4.7 4.7-12.3.1-17l-22.5-22.7c-4.7-4.7-12.3-4.7-17-.1L223 290.7zM466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 464C158.5 423.4 64 297.3 64 128l192-80 192 80c0 173.8-98.4 297-192 336z"
      />
    </svg>
  ),
  plates: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path
        fill={color}
        d="M424 160H152c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24zm-8 160H160V192h256v128zm128-96h32V112c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v112h32c17.673 0 32 14.327 32 32s-14.327 32-32 32H0v112c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V288h-32c-17.673 0-32-14.327-32-32s14.327-32 32-32zm0 96v80c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16v-80c35.29 0 64-28.71 64-64s-28.71-64-64-64v-80c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v80c-35.29 0-64 28.71-64 64s28.71 64 64 64z"
      />
    </svg>
  ),
  truck: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path
        fill={color}
        d="M624 368h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v304c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208-96H242.7c-16.6-28.6-47.2-48-82.7-48s-66.1 19.4-82.7 48H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v312zm48-224h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V272h144v91.1z"
      />
    </svg>
  ),
  facebook: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        fill={color}
        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
      />
    </svg>
  ),
  twitter: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
      />
    </svg>
  ),
  linkedIn: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        fill={color}
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      />
    </svg>
  ),
  youtube: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path
        fill={color}
        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      />
    </svg>
  ),
  phone: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z"
      />
    </svg>
  ),
  envelope: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
      />
    </svg>
  ),
  flag: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M448 327.4V258c-15.5 9.4-44 19-72 22.9v70.4c28.7-2.8 54.8-13.5 72-23.9zm0-207.3c-21.2 8.1-46.7 15.8-72 20.2v70.6c25-4 48.6-12.5 72-21.4zM88 336.8c21.7-7 47.2-11.9 72-14.5v-70.1c-24.3 2.4-48 7.6-72 15.3zm357.1-285C409.2 67.3 371.6 80 336.2 80c-49.1 0-93.3-32-161.9-32-31.3 0-58.3 6.5-80.8 15.2 2.2-6.7 3-13.7 2.1-20.7C93.1 19.6 74.2 1.6 51.2.1 23.2-1.7 0 20.4 0 48c0 17.8 9.7 33.3 24 41.6V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-83.4c37.9-17.3 71.3-28.6 127.8-28.6 49.1 0 93.3 32 161.9 32 58.5 0 102-22.6 128.5-40 13.6-8.9 21.7-24 21.7-40.2V95.9c.1-34.4-35.2-57.7-66.8-44.1zM464 336c-21.8 15.4-60.8 32-102.3 32-59.9 0-102-32-161.9-32-43.4 0-96.4 9.4-127.8 24V128c21.8-15.4 60.8-32 102.3-32 59.9 0 102 32 161.9 32 43.3 0 96.3-17.4 127.8-32zM88 136.6V206c15.5-9.4 44-19 72-22.9v-70.4c-28.7 2.8-54.8 13.4-72 23.9zm72 46.5v69.1c30.5-3 51.4-1.3 72 3.1v-67c-28.5-7.6-48.7-8.4-72-5.2zm144 92.7c-23.7-6.2-46.5-15.2-72-20.5v67.5c25.9 4.3 48.9 12.9 72 19.6v-66.6c28.5 7.5 48.7 8.3 72 5.2v-70c-23.8 3.8-46.5 3.3-72-2.1zm0-134.5c-25.9-4.3-48.8-12.9-72-19.7v66.6c23.8 6.3 46.5 15.2 72 20.5z"
      />
    </svg>
  ),
  paperPlane: (size: number, color = 'silver') => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
      />
    </svg>
  )
};

export type SomeType = { some: 'type' };

export type AvailableIcons = keyof typeof Icons;

export type IconsWrapperProps = {
  size?: number;
  color?: string;
};

export type IconsProps = IconsWrapperProps & {
  iconName: AvailableIcons;
};

export const IconWrapper = styled.span<IconsWrapperProps>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  ${({ size = 16 }) => css`
    width: ${size}px;
  `}
`;

export const Icon: React.FC<IconsProps> = ({ size = 20, color = 'silver', iconName }) => (
  <IconWrapper size={size}>{Icons[iconName](size, color)}</IconWrapper>
);

export default Icon;
