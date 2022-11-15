import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MusicPlayer, Login, Header } from '@components';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/';
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-1 flex-col py-[16px]">
        {isLoginPage ? null : <Header />}
        <div className="flex flex-row flex-1 z-10 px-[32px] justify-between">
          <div className="flex flex-[2] items-start">
            <Component {...pageProps} />
          </div>

          <div className="w-[2px] bg-veryLightOrange absolute h-screen top-0 left-[66%]" />

          <div className="flex flex-[1]">{isLoginPage ? <Login /> : <MusicPlayer />}</div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
