import { LazyQueryExecFunction } from '@apollo/client';
import React from 'react';
import { useSearch } from '../../../context/SearchContext';
import {
  Exact,
  InputMaybe,
  SearchQuery,
} from '../../../graphql/generated/graphql';
import Pagination from '../../organisms/Pagination/Pagination';

export const ITEMS_PER_QUERY = 10;

type SearchItemType = LazyQueryExecFunction<
  SearchQuery,
  Exact<{
    query: string;
    first?: InputMaybe<number>;
    last?: InputMaybe<number>;
    afterUser?: InputMaybe<string>;
    afterRepository?: InputMaybe<string>;
    beforeUser?: InputMaybe<string>;
    beforeRepository?: InputMaybe<string>;
  }>
>;

const GithubPagination = ({
  data,
  searchItems,
}: {
  data: SearchQuery;
  searchItems: SearchItemType;
}) => {
  const { searchTerm } = useSearch();

  const handlePaginationNext = () => {
    searchItems({
      variables: {
        query: searchTerm || 'passion',
        afterUser: data?.users.pageInfo.endCursor,
        afterRepository: data?.repositories.pageInfo.endCursor,
        first: ITEMS_PER_QUERY,
      },
    });
  };

  const handlePaginationPrev = () => {
    searchItems({
      variables: {
        query: searchTerm || 'passion',
        beforeUser: data?.users.pageInfo.startCursor,
        beforeRepository: data?.repositories.pageInfo.startCursor,
        last: ITEMS_PER_QUERY,
      },
    });
  };

  return (
    <Pagination
      hasNext={
        data?.repositories.pageInfo.hasNextPage ||
        data?.users.pageInfo.hasNextPage
      }
      hasPrev={
        data?.repositories.pageInfo.hasPreviousPage ||
        data?.users.pageInfo.hasPreviousPage
      }
      loadPrev={handlePaginationPrev}
      loadNext={handlePaginationNext}
    />
  );
};

export default GithubPagination;
