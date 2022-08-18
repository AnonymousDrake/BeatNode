import Image, { StaticImageData } from 'next/image';
import DiscoverBox from './DiscoverBox';

const component1 = ({}: {}) => {
  return (
    <div className="flex">
      <DiscoverBox label="hey_google" imageSource={'componentsassets\bg-main.jpg'} />
    </div>
  );
};

export default component1;
