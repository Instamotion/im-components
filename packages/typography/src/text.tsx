import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  className?: string;
  tag?: 'p' | 'span';
}

const TextComponent: React.FC<TextProps> = ({ tag = 'p', className, children }) => {
  const Tag = `${tag}` as 'p' | 'span';
  return <Tag className={className}>{children}</Tag>;
};

export const Text = styled(TextComponent)`
  font-size: 1rem;
`;
