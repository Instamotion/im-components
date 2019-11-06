---
to: packages/<%= name %>/src/<%= name %>.tsx
---
import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

export interface <%= h.changeCase.pascalCase(name) %>Props {
  className?: string;
  text?: string;
}

const <%= h.changeCase.pascalCase(name) %>Component: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = ({ className, text }) => (
  <div className={className}> {text} </div>
);

const <%= h.changeCase.pascalCase(name) %> = styled(<%= h.changeCase.pascalCase(name) %>Component)`
  width: 50%;
  padding: 1rem;
  font-size: 2rem;
  background: ${theme.color.silver};
`;

export default <%= h.changeCase.pascalCase(name) %>;
