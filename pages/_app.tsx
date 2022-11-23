import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RouteGuard, Wrapper } from '@components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RouteGuard>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </RouteGuard>
  );
}

export default MyApp;
