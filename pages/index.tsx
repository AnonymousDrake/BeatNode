import type { NextPage } from 'next';
import {
  Header,
  Wrapper,
  Input,
  SignUpButton,
  GoogleButton,
  MusicBox,
  ExploreButton,
} from '@components';

const Home: NextPage = () => (
  <Wrapper>
    <Header />
    <Input label="Hello Parent" inputProps={{ placeholder: 'justramdone' }} />

    <ExploreButton />
  </Wrapper>
);

export default Home;
