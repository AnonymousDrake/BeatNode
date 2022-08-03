import type { NextPage } from 'next';
import {
  Header,
  Wrapper,
  Input,
  SignUpButton,
  GoogleButton,
  MusicBox,
  ExploreButton,
  DiscoverBox,
} from '@components';

const Home: NextPage = () => (
  <Wrapper>
    <Header />
    <Input label="Hello Parent" inputProps={{ placeholder: 'justramdone' }} />

    <DiscoverBox />
  </Wrapper>
);

export default Home;
