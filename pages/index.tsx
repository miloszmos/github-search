import { useEffect } from 'react';
import DisplayError from '../components/molecules/ErrorDisplay/ErrorDisplay';
import RepositoryItem from '../components/molecules/ListItem/RepositoryItem';
import { SkeletonItemsLoadingList } from '../components/molecules/ListItem/SkeletonItemLoading/SkeletonItemLoading';
import UserItem from '../components/molecules/ListItem/UserItem';
import NoResults from '../components/organisms/NoResults/NoResults';
import GithubPagination, {
  ITEMS_PER_QUERY,
} from '../components/pages/Home/GithubPagination';
import {
  HomeResultsTitle,
  HomeSectionWapper,
} from '../components/pages/Home/Home.styles';
import { useSearch } from '../context/SearchContext';
import { useSearchLazyQuery } from '../graphql/generated/graphql';
import useDebounce from '../hooks/useDebounce';
import { getDataReady } from '../lib/getDataReady';
import { getTotalResults } from '../lib/getTotalResults';

const HomePage = () => {
  const { searchTerm } = useSearch();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [searchItems, { data, loading, error }] = useSearchLazyQuery();

  const renderInitilas = () =>
    searchItems({
      variables: {
        first: ITEMS_PER_QUERY,
        afterUser: null,
        afterRepository: null,
        query: 'passion',
      },
    });

  useEffect(() => {
    renderInitilas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchItems({
          variables: {
            query: debouncedSearchTerm,
            first: ITEMS_PER_QUERY,
          },
        });
      } else {
        renderInitilas();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearchTerm]
  );

  if (loading) {
    return (
      <HomeSectionWapper>
        <SkeletonItemsLoadingList />
      </HomeSectionWapper>
    );
  }

  if (error) {
    return <DisplayError error={error} />;
  }

  if (!data || getTotalResults(data) === 0) {
    return <NoResults />;
  }

  return (
    data && (
      <>
        <HomeResultsTitle>
          {getTotalResults(data).toLocaleString('en-US')} results
        </HomeResultsTitle>
        <section>
          {getDataReady(data)?.map((el) => {
            if (el?.__typename === 'Repository') {
              return <RepositoryItem key={el?.id} repository={el} />;
            }
            if (el?.__typename === 'User') {
              return <UserItem key={el?.id} user={el} />;
            }
          })}
          <GithubPagination searchItems={searchItems} data={data} />
        </section>
      </>
    )
  );
};

export default HomePage;
