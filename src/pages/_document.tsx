import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          <style id="emotion-insertion-point" data-emotion={(this.props as any).emotionId}>
            {(this.props as any).emotionStyleStrings}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;
  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createCache({
    key: 'css',
    prepend: true
  });
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return (
            <CacheProvider value={cache}>
              <App {...props} />
            </CacheProvider>
          );
        }
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionChunks = extractCriticalToChunks(initialProps.html);

  return {
    ...initialProps,
    emotionId: `css server ${emotionChunks.styles.map(({ ids }) => ids.join(' ')).join(' ')}`,
    emotionStyleStrings: emotionChunks.styles.map((style) => style.css).join(' ')
  };
};
