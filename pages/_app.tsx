import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { Component } from 'react';
import { ReactElement } from 'react';
import '../styles/globals.css'
// type
type NextPageWithLayout = NextPage & {
 getLayout?: (page:ReactElement) => JSX.Element;
}

type AppPropsWithLayout = AppProps &{
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
