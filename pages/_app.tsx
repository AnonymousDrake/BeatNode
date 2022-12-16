import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Wrapper } from '@components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wrapper />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
