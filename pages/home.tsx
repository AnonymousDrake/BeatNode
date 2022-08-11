import { Header } from '@components';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="flex flex-1 w-[67vw] h-screen items-start">
    <Header />
  </div>
);

export default Home;
