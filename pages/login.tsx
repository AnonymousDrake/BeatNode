import { Login } from '@components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Title = () => (
  <>
    <h1 className="text-white font-poppins text-[64px] leading-1 tracking-[4px] whitespace-pre-line font-extrabold opacity-30 bg-clip-text">
      Welcome To
    </h1>
    <h1 className="text-white font-poppins text-[172px] leading-1 tracking-[1px] font-extrabold bg-clip-text opacity-30 shadow-inner drop-shadow-md">
      Voiclone
    </h1>
  </>
);

const LoginScreen: NextPage = () => {
  return (
    <>
      <Head>
        <title>Voiclone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-screen w-screen flex items-center pl-[64px] flex-row justify-between">
        <div className="flex w-[60vw] h-[100vh] justify-center flex-col items-start border-r-[2px] border-veryLightOrange">
          <Title />
        </div>
        <div className="flex flex-[1]">
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
