import React from 'react';
import styled, { css } from 'styled-components';

export interface TableCellProps {
  className?: string;
  colSpan?: number;
  align?: 'left' | 'center' | 'right';
}

export const TableCellComponent: React.FC<TableCellProps> = ({ className, children, colSpan }) => (
  <td className={className} colSpan={colSpan}>
    {children}
  </td>
);

export const TableCell = styled(TableCellComponent)`
  ${({ align = 'left' }) => css`
    padding: 4px 12px;
    text-align: ${align};
  `};
`;
