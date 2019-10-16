import React from 'react';
import styled, { css } from 'styled-components';
import { TableRow } from './tableRow';
import theme from '@im-ui/theme';

export interface TableBodyProps {
  className?: string;
  foo?: string;
}

export const TableBodyComponent: React.FC<TableBodyProps> = ({ className, children }) => (
  <tbody className={className}>{children}</tbody>
);

export const TableBody = styled(TableBodyComponent)`
  ${TableRow} {
    font-size: ${`${theme.table.body.font.size}px`};
    letter-spacing: ${`${theme.table.body.font.spacing}px`};
    line-height: ${`${theme.table.body.font.height}px`};
    font-weight: ${`${theme.table.body.font.weight}`};
    background-color: ${theme.table.body.background};
    :nth-child(odd) {
      background-color: ${theme.table.body.background};
    }
  }
`;
