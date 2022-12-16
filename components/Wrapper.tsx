import { memo } from 'react';

const Wrapper = () => (
  <video
    className="flex flex-1 w-full h-[100%] absolute z-0 object-cover"
    src="https://assets.codepen.io/3364143/7btrrd.mp4"
    autoPlay
    loop
  />
);

export default memo(Wrapper);
