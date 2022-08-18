import type { NextPage } from 'next';
import Head from 'next/head';
import component1 from 'components/component1';

const Home: NextPage = () => (
  <Head>
    <title>Dashboard</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <component1 />
  </Head>
);

Home.displayName = 'Dashboard';

export default Home;
