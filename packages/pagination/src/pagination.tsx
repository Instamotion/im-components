/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import PaginationItem from './views/PaginationItem';
import PaginationPrev from './views/PaginationPrev';
import PaginationNext from './views/PaginationNext';
import PaginationGap from './views/PaginationGap';
import theme from '@im-ui/theme';

export interface PaginationProps {
  /**
   * The total number of pages.
   */
  totalPages: number;

  /**
   * The initial page selected.
   */
  currentPage: number;

  /**
   * The number of pages to display for margins.
   */
  pagePadding: number;

  className?: string;

  /**
   * The method to call when a page/next/prev buttons are clicked.
   */
  onPageChange: (pageIndex: number) => void;
}

const StyledPagination = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0 0.6rem;
  text-align: center;
  cursor: pointer;
  list-style: none;
  ${theme.mediaQueries.whenMobile} {
    flex: 1 1 auto;
  }
`;

const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  pagePadding,
  onPageChange
}) => {
  const changePage = (idx: number) => {
    return onPageChange(idx);
  };

  const createPage = (pageIndex: number, pageProps: any) => {
    return (
      <PaginationItem onClick={() => changePage(pageIndex)} key={`p-${pageIndex}`} {...pageProps}>
        <span>{pageIndex}</span>
      </PaginationItem>
    );
  };

  const renderPages = () => {
    const pages = [];
    for (let pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
      // Always display the current page
      if (pageIndex === currentPage) {
        pages.push(createPage(pageIndex, { active: true }));
        continue;
      }
      // Always display the first and last page
      if (pageIndex === 1 || pageIndex === totalPages) {
        pages.push(createPage(pageIndex, {}));
        continue;
      }
      // Display pages used for padding around the current page
      if (pageIndex >= currentPage - pagePadding && pageIndex <= currentPage + pagePadding) {
        pages.push(createPage(pageIndex, {}));
        continue;
      }
      // Handle case where front gap should not be displayed
      if (currentPage <= pagePadding + 3 && pageIndex <= pagePadding * 2 + 3) {
        pages.push(createPage(pageIndex, {}));
        continue;
      }
      // Handle case where back gap should not be displayed
      if (
        currentPage >= totalPages - pagePadding - 2 &&
        pageIndex >= totalPages - pagePadding * 2 - 4
      ) {
        pages.push(createPage(pageIndex, {}));
        continue;
      }
      // Render Gap and determine next starting pageIndex
      if (pageIndex < currentPage) {
        pages.push(<PaginationGap key={`gap-${pageIndex}`}>...</PaginationGap>);

        if (currentPage >= totalPages - pagePadding - 2) {
          pageIndex = totalPages - pagePadding * 2 - 3;
        } else {
          pageIndex = currentPage - pagePadding - 1;
        }
      } else {
        pages.push(<PaginationGap key={`gap-${pageIndex}`}>...</PaginationGap>);
        pageIndex = totalPages - 1;
      }
    }
    return pages;
  };

  const isFirstPageSelected = currentPage === 1;
  const isLastPageSelected = currentPage === totalPages;

  return (
    <StyledPagination>
      <PaginationPrev display={!isFirstPageSelected} onClick={() => changePage(currentPage - 1)}>
        <FormattedMessage id="pagination.previous" />
      </PaginationPrev>
      <StyledList>{renderPages()}</StyledList>
      <PaginationNext display={!isLastPageSelected} onClick={() => changePage(currentPage + 1)}>
        <FormattedMessage id="pagination.next" />
      </PaginationNext>
    </StyledPagination>
  );
};

export default PaginationComponent;
