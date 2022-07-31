import type { NextPage } from 'next';
import { Header, Wrapper, Input } from '@components';

const Home: NextPage = () => (
  <Wrapper>
    <Header />
    <Input label="Hello Parent" />
  </Wrapper>
);

export default Home;
