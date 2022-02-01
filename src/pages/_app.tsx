/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useUserAgent } from 'next-useragent';

import { StylesProvider, ThemeProvider } from '@mui/styles';

import 'src/styles/index.scss';
import { AppNav, AppHeader } from 'src/components';
import { throttle, delay, theme } from 'src/utils';

export const AppContext = createContext({});
export const AppWindowContext = createContext<number>(globalThis.innerWidth);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const _window = globalThis || window;
  const ua = useUserAgent(pageProps._uaString || _window.navigator?.userAgent);
  const [windowWidth, setWindowWidth] = useState(
    _window.innerWidth || (ua.isMobile ? 0 : ua.isTablet ? 768 : 992)
  );
  const appContextValue = useMemo(() => ({}), []);
  const { pathname } = useRouter();

  useEffect(() => {
    let _throttle: NodeJS.Timeout;

    _window.onresize = () => {
      clearTimeout(_throttle);
      _throttle = throttle(() => {
        setWindowWidth(_window.innerWidth);
      }, 200);
    };
    _window.document.querySelector('html')!.lang = 'en-UK';
    delay(10, () => {
      _window.document.querySelector('head')!.insertAdjacentHTML(
        'afterbegin',
        `
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,500,600&amp;display=swap"
            rel="stylesheet"
          />
        `
      );
    });
  }, [_window]);

  useEffect(() => {
    if (pathname) {
      const div = document.createElement('div');

      div.id = 'page-scroll-observer';
      document.querySelector('#__next > main')?.insertAdjacentElement('afterbegin', div);
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={appContextValue}>
        <AppWindowContext.Provider value={windowWidth}>
          <Head>
            <meta name="description" content="Only1 UI Dashboard Inspiration" />
            <meta name="keywords" content="UI's, dashboards ui examples" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>

          <StylesProvider injectFirst>
            <AppNav />
            <AppHeader />
            <Component {...pageProps}></Component>
          </StylesProvider>
        </AppWindowContext.Provider>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
