import '../styles/globalStyles.tsx';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '../styles/globalStyles';
import { client } from '../lib/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
