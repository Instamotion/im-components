import React from 'react';
import styled from 'styled-components';

export interface TableRowProps {
  className?: string;
  foo?: string;
}

export const TableRowComponent: React.FC<TableRowProps> = ({ className, children }) => (
  <tr className={className}>{children}</tr>
);

export const TableRow = styled(TableRowComponent)``;
