import type { NextPage } from 'next';
import Head from 'next/head';
import Component1 from 'components/component1';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Dashboard</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex flex-row">
      <div className="flex flex-1">
        <Component1 />
      </div>
      <div className="flex flex-1">
        <Component1 />
      </div>
    </div>
  </>
);

Home.displayName = 'Dashboard';

export default Home;
