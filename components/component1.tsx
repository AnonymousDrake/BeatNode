import Image, { StaticImageData } from 'next/image';
import DiscoverBox from './DiscoverBox';

const Component1 = ({}: {}) => {
  return (
    <div className="flex">
      <DiscoverBox label="hey_google" imageSource={'/assets/bg-main.jpg'} />
    </div>
  );
};

export default Component1;
