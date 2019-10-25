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
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  background-image: url("${({ imgPath }) => imgPath}");
  object-fit: contain;
  border-radius: 1rem;
  background-position: center;
  margin: 0 1rem;
`;

export default Icon;
