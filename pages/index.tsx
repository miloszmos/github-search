import { useEffect } from 'react';
import { SkeletonItemsLoadingList } from '../components/molecules/SkeletonItemLoading/SkeletonItemLoading';
import NoResults from '../components/organisms/NoResults/NoResults';
import { HomeSectionWapper } from '../components/pages/Home/Home.styles';
import { useSearchLazyQuery } from '../graphql/generated/graphql';
import { getDataReady } from '../lib/getDataReady';

const HomePage = () => {
  const [searchItem, { data, loading }] = useSearchLazyQuery();
  const renderInitilas = () =>
    searchItem({
      variables: {
        query: 'init',
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
            return <p>Test</p>;
          }
        })}
    </HomeSectionWapper>
  );
};

export default HomePage;
