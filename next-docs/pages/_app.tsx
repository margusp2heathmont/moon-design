import React, { ReactChild, ReactNode } from 'react';
import '../styles/globals.css';
import '../styles/themes.css';
import '../styles/custom.css';
// import '@moon/core/lib/loader/styles.css';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import SearchProvider from '../components/search/SearchProvider';
import { DocsThemeProvider } from '../components/themes/DocsThemeProvider';
import type { AppProps } from 'next/app';

type GetLayout = (page: ReactNode) => ReactChild & ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout;

  return (
    <>
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favs/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favs/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favs/favicon-16x16.png" />
        <link rel="manifest" href="/favs/site.webmanifest" />
        <link rel="mask-icon" href="/favs/safari-pinned-tab.svg" />
        <link rel="shortcut icon" href="/favs/favicon.ico" />
        <meta name="msapplication-config" content="/favs/browserconfig.xml" />
      </Head>
      <SearchProvider>
        <DocsThemeProvider>
          {getLayout ? (
            getLayout(<Component {...pageProps} />)
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </DocsThemeProvider>
      </SearchProvider>
    </>
  );
}
export default MyApp;
