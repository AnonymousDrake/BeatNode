import Image from 'next/image';
import { memo } from 'react';

const BackgroundImage = () => (
  <Image
    alt="bg-main"
    src={require('./assets/bg-main.jpg')}
    layout="fill"
    width="100vw"
    height="100vh"
    className="opacity-5"
  />
);

export default memo(BackgroundImage);
