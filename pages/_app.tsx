import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MusicPlayer, Wrapper, Login, BackgroundImage } from '@components';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-screen h-screen z-[-1]">
        <Wrapper>{router.pathname === '/' ? <BackgroundImage /> : null}</Wrapper>
      </div>
      <div className="flex flex-row w-screen h-screen z-10 px-[32px] justify-between self-center">
        <div className="flex flex-1 w-[67vw] h-screen items-start">
          <Component {...pageProps} />
        </div>
        <div className="py-[32px] w-[33vw]">
          {router.pathname === '/' ? <Login /> : <MusicPlayer />}
        </div>
      </div>
    </div>
  );
}

export default MyApp;
