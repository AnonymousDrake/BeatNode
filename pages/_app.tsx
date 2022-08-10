import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MusicPlayer, Wrapper, Login, BackgroundImage } from '@components';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-screen h-screen">
        <Wrapper>{router.pathname === '/' ? <BackgroundImage /> : null}</Wrapper>
      </div>
      <div>
        <Component {...pageProps} />
      </div>
      {router.pathname === '/' ? <Login /> : <MusicPlayer />}
    </div>
  );
}

export default MyApp;
