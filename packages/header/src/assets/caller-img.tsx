import React from 'react';
import styled from 'styled-components';
const callerImg = require('./caller-img.png');

interface Props {
  className?: string;
}

export const IconComponent: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <img src={callerImg}></img>
    </div>
  );
};

const Icon = styled(IconComponent)`
  img {
    width: 34px;
    height: 34px;
    object-fit: contain;
  }
`;

export default Icon;
