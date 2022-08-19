import Image, { StaticImageData } from 'next/image';
import DiscoverBox from './DiscoverBox';

const Component2 = ({}: {}) => {
  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-white font-bold text-2xl">Recently Played</h1>
      <DiscoverBox label="Lobe Nigjts" imageSource={'/assets/bg-main.jpg'} />
      <DiscoverBox label="black sheep" imageSource={'/assets/bg-main.jpg'} />
      <DiscoverBox label="lober" imageSource={'/assets/bg-main.jpg'} />
      <DiscoverBox label="Jimmewari" imageSource={'/assets/bg-main.jpg'} />
    </div>
  );
};

export default Component2;
