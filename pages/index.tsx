import type { NextPage } from 'next';
import { Header, Wrapper, Input } from '@components';

const Home: NextPage = () => (
  <Wrapper>
    <Header />
    <Input label="Hello Parent" inputProps={{ placeholder: 'justramdone' }} />
  </Wrapper>
);

export default Home;
