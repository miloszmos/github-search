import '../styles/globalStyles.tsx';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '../styles/globalStyles';
import { client } from '../lib/apolloClient';
import Layout from '../components/templates/Layout';
import Head from 'next/head';
import { SearchProvider } from '../context/SearchContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>Github | Search</title>
          <meta
            name="description"
            content="A place where you search for users and repositories"
          />
          <meta
            property="og:title"
            content="Search | Find what you are looking for"
          />
          <meta
            property="og:description"
            content="A place where you search for users and repositories"
          />
          <meta property="og:url" content="https:url" />
          <meta property="og:type" content="https://website.com/" />
        </Head>
        <GlobalStyle />
        <SearchProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
