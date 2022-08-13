import React from 'react';
import Button from '../../atoms/Button/Button';
import ArrowLeftIcon from '../../atoms/Icons/ArrowLeftIcon';
import ArrowRightIcon from '../../atoms/Icons/ArrowRightIcon';
import { PaginationStyles } from './Pagination.styles';

interface PaginationProps {
  loadNext: () => void;
  loadPrev: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const Pagination = ({
  hasNext,
  hasPrev,
  loadNext,
  loadPrev,
}: PaginationProps) => {
  return (
    <PaginationStyles>
      <Button
        color={hasPrev ? 'primary' : 'black'}
        aria-disabled={!hasPrev}
        disabled={!hasPrev}
        leftIcon={<ArrowLeftIcon active={hasPrev} />}
        onClick={loadPrev}
      >
        Previous
      </Button>
      <Button
        color={hasNext ? 'primary' : 'black'}
        aria-disabled={!hasPrev}
        disabled={!hasNext}
        rightIcon={<ArrowRightIcon active={hasNext} />}
        onClick={loadNext}
      >
        Next
      </Button>
    </PaginationStyles>
  );
};

export default Pagination;
