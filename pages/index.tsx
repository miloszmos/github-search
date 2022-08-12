import { useEffect } from 'react';
import RepositoryItem from '../components/molecules/ListItem/RepositoryItem';
import { SkeletonItemsLoadingList } from '../components/molecules/ListItem/SkeletonItemLoading/SkeletonItemLoading';
import UserItem from '../components/molecules/ListItem/UserItem';
import NoResults from '../components/organisms/NoResults/NoResults';
import { HomeSectionWapper } from '../components/pages/Home/Home.styles';
import { useSearchLazyQuery } from '../graphql/generated/graphql';
import { getDataReady } from '../lib/getDataReady';

const HomePage = () => {
  const [searchItem, { data, loading }] = useSearchLazyQuery();
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
    <HomeSectionWapper>
      {data &&
        getDataReady(data)?.map((el) => {
          if (el?.__typename === 'Repository') {
            return <RepositoryItem key={el?.id} repository={el} />;
          }
          if (el?.__typename === 'User') {
            return <UserItem key={el?.id} user={el} />;
          }
        })}
    </HomeSectionWapper>
  );
};

export default HomePage;
