import styled from 'styled-components';
import React from 'react';

interface SlideProps {
    className?: string;
    children?: JSX.Element | string;
  style?: object;
}

const SlideComponent: React.FC<SlideProps> = ({ className, children, style }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

const Slide = styled(SlideComponent)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Slide;
