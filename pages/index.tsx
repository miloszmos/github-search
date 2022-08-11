import type { NextPage } from 'next';
import styled from 'styled-components';
import { useSearchQuery } from '../graphql/generated/graphql';

const HomePageStyles = styled.div`
  background-color: beige;
`;

const Home: NextPage = () => {
  const { data, loading } = useSearchQuery({
    variables: {
      query: 'test',
    },
  });

  if (loading) {
    return <p>Loading...👀</p>;
  }

  return (
    <HomePageStyles>
      {data?.users.nodes?.map(
        (el) => el?.__typename === 'User' && <div>{el.name}</div>
      )}
    </HomePageStyles>
  );
};

export default Home;
