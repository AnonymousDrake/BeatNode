import { ImageWrapper } from '@components';
import Image from 'next/image';
import { memo } from 'react';

const MusicBox = () => (
  <div className="flex py-[24px] flex-row items-center justify-center">
    <Image
      src={require('./assets/arrow.svg')}
      alt="previous"
      height={24}
      width={24}
      color="#FFFFFF"
    />
    <ImageWrapper height={200} width={180} />
    <Image
      src={require('./assets/arrow.svg')}
      alt="next"
      className="rotate-180 hover:scale-110"
      height={24}
      width={24}
    />
  </div>
);

export default memo(MusicBox);
