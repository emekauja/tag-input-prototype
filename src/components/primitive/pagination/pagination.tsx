import * as React from 'react';

import { Button } from '@/components/forms/button/button';

import { PaginationItem } from './components/paginationitem';

interface IPaginationProps {
  pageNumbers: number[];
  activePage: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
  disableNextBtn?: boolean;
  disablePreviousBtn?: boolean;
  onPageItemSelect: (val: number) => void;
}

export const Pagination = ({
  activePage,
  pageNumbers,
  onNextClick,
  onPreviousClick,
  disableNextBtn,
  onPageItemSelect,
  disablePreviousBtn,
}: IPaginationProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-500 bg-black p-3">
      <Button onClick={onPreviousClick} disabled={disablePreviousBtn}>
        Previous Page
      </Button>

      <div className="flex space-x-2 ">
        {pageNumbers.map((pageNum, index) => (
          <PaginationItem
            key={index}
            pageNumber={pageNum}
            selected={pageNum === activePage + 1}
            onSelect={(val) => onPageItemSelect(val - 1)}
          />
        ))}
      </div>

      <Button
        onClick={onNextClick}
        // Disable the Next Page button until we know a next page is available
        disabled={disableNextBtn}
      >
        Next Page
      </Button>
    </div>
  );
};
