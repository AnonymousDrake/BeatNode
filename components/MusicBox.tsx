import { ImageWrapper, Slider } from '@components';
import Image from 'next/image';
import { memo } from 'react';

const MusicBox = () => (
  <div className="flex flex-col items-center py-[4px]">
    <div className="flex flex-1 flex-row items-center justify-center py-[20px]">
      <div className="p-[16px] hover:scale-[125%]">
        <Image
          src={require('./assets/arrow.svg')}
          alt="previous"
          height={24}
          width={24}
          color="#FFFFFF"
        />
      </div>
      <ImageWrapper height={200} width={180} />
      <div className="p-[16px] hover:scale-[125%]">
        <Image
          src={require('./assets/arrow.svg')}
          alt="next"
          className="rotate-180"
          height={24}
          width={24}
        />
      </div>
    </div>
    <Slider />
  </div>
);

export default memo(MusicBox);
