import type { NextPage } from 'next';
import styled from 'styled-components';

const HomePageStyles = styled.div`
  background-color: beige;
`;

const Home: NextPage = () => {
  return <HomePageStyles>App</HomePageStyles>;
};

export default Home;
