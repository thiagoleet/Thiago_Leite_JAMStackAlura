import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

function App({ Component, pageProps }) {
  const title = 'Desafio Bootcamp NextJS Módulo 1';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
