import React from 'react';
import styled, { css } from 'styled-components';
import { TableRow } from './tableRow';
import theme from '@im-ui/theme';

export interface TableHeadProps {
  className?: string;
  foo?: string;
}

export const TableHeadComponent: React.FC<TableHeadProps> = ({ className, children }) => (
  <thead className={className}>{children}</thead>
);

export const TableHead = styled(TableHeadComponent)`
  ${TableRow} {
    font-size: ${`${theme.table.head.font.size}px`};
    line-height: ${`${theme.table.head.font.height}px`};
    letter-spacing: ${`${theme.table.head.font.spacing}px`};
    font-weight: ${`${theme.table.head.font.weight}`};
    background-color: ${theme.table.head.background};
  }
`;
