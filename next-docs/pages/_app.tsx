import { ReactChild, ReactNode } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/themes.css';
import '../styles/custom.css';

import Layout from '../components/Layout';
import React from 'react';
import { DocsThemeProvider } from '../components/themes/DocsThemeProvider';
import { NextPage } from 'next';

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
      {/* TODO Add favicon.ico*/}
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DocsThemeProvider>
        {getLayout ? (
          getLayout(<Component {...pageProps} />)
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </DocsThemeProvider>
    </>
  );
}
export default MyApp;
