import type { NextPage } from 'next';
import { Header, Wrapper, Input, SignUpButton, GoogleButton, MusicBox } from '@components';

const Home: NextPage = () => (
  <Wrapper>
    <Header />
    <Input label="Hello Parent" inputProps={{ placeholder: 'justramdone' }} />
    <SignUpButton />
    <GoogleButton />
    <MusicBox />
  </Wrapper>
);

export default Home;
