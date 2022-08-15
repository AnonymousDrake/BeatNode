import { Header } from '@components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Dashboard</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex flex-1 h-screen items-start lg:w-[60vw]">
      <Header />
      <div className="w-[2px] bg-lightOrange" />
    </div>
  </>
);

Home.displayName = 'Dashboard';

export default Home;
