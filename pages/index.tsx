import { useEffect } from 'react';
import RepositoryItem from '../components/molecules/ListItem/RepositoryItem';
import { SkeletonItemsLoadingList } from '../components/molecules/ListItem/SkeletonItemLoading/SkeletonItemLoading';
import UserItem from '../components/molecules/ListItem/UserItem';
import NoResults from '../components/organisms/NoResults/NoResults';
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
  const [searchItem, { data, loading }] = useSearchLazyQuery();

  console.log(data);

  const renderInitilas = () =>
    searchItem({
      variables: {
        query: 'test',
      },
    });

  useEffect(() => {
    renderInitilas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchItem({
          variables: {
            query: debouncedSearchTerm,
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

  if (data && !getDataReady(data).length) {
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
        </section>
      </>
    )
  );
};

export default HomePage;
