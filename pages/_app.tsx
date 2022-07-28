import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header, Wrapper, PlayerDrawer } from '@components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header />
      <div className="border-[0.5px] border-border w-screen left-0 right-0"></div>
      <div className="flex flex-1 flex-row justify-between align-center">
        <Component {...pageProps} />
        <PlayerDrawer />
      </div>
    </Wrapper>
  );
}

export default MyApp;
