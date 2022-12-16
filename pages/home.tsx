import { Upload, Download, TextInput, RecordedMusic, Heading } from '@components';
import type { NextPage } from 'next';
import Head from 'next/head';

const data = [
  { original: '', cloned: '', index: 1 },
  { original: '', cloned: '', index: 2 },
  { original: '', cloned: '', index: 3 },
  { original: '', cloned: '', index: 4 },
  { original: '', cloned: '', index: 5 },
  { original: '', cloned: '', index: 6 },
];

const Home: NextPage = () => (
  <>
    <Head>
      <title>Voiclone</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex flex-1 align-center items-center self-center flex-col">
      <div className="flex flex-1 align-center items-center flex-col">
        <Heading label="Saved Recordings" />
        <li className="flex flex-1 flex-row w-[48px] h-[64px]">
          {data?.map(item => (
            <RecordedMusic key={item.index} data={item} />
          ))}
        </li>
      </div>
      <div>
        <Heading label="Generate your own recordings" />
        <div className="flex flex-1 flex-row">
          <Upload />
          <TextInput />
          <Download />
        </div>
      </div>
    </div>
  </>
);

Home.displayName = 'Home';

export default Home;
