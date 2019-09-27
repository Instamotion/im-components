import React from 'react';
import styled from 'styled-components';

const Accordion: React.FC = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default styled(Accordion)`
  margin: 0;
  padding: 0;
`;
