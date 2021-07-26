import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }) {
  const title = 'Desafio Bootcamp NextJS Módulo 1';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

export default App;
