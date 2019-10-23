import React from 'react';
import styled from 'styled-components';

interface Props {
  imgPath: string;
  className?: string;
}

export const IconComponent: React.FC<Props> = ({ className, imgPath }) => {
  return <div className={className}></div>;
};

const Icon = styled(IconComponent)`
  width: 32px;
  height: 32px;
  background-image: url("${({ imgPath }) => imgPath}");
  object-fit: contain;
  border-radius: 16px;
  background-position: center;
`;

export default Icon;
