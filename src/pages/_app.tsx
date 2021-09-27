/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StylesProvider } from '@material-ui/core/styles';

import 'src/styles/index.scss';
import { AppNav, AppHeader } from 'src/components';
import { throttle, delay } from 'src/utils';

export const AppContext = createContext({});
export const AppWindowContext = createContext<number>(globalThis.innerWidth);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const _window = globalThis || window;
  const [windowWidth, setWindowWidth] = useState(_window.innerWidth);
  const appContextValue = useMemo(() => ({}), []);

  useEffect(() => {
    let _throttle: NodeJS.Timeout;

    _window.onresize = () => {
      clearTimeout(_throttle);
      _throttle = throttle(() => {
        setWindowWidth(_window.innerWidth);
      }, 200);
    };
    _window.document.querySelector('html')!.lang = 'en-UK';
    delay(25, () => {
      _window.document.querySelector('head')!.insertAdjacentHTML(
        'afterbegin',
        `
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,600&amp;display=swap"
            rel="stylesheet"
          />
        `
      );
    });
  }, [_window]);

  return (
    <AppContext.Provider value={appContextValue}>
      <AppWindowContext.Provider value={windowWidth}>
        <Head>
          <meta name="description" content="Author: Godspower Sunday, Desc: Only1 UI Dashboard." />
          <meta name="keywords" content="UI's, dashboards ui examples" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <StylesProvider injectFirst>
          <AppNav />
          <AppHeader />
          <Component {...pageProps} />
        </StylesProvider>
      </AppWindowContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
