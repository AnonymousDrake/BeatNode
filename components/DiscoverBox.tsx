import Image, { StaticImageData } from 'next/image';
import ExploreButton from './ExploreButton';

const DiscoverBox = ({
  label = 'Sample Song 1',
  imageSource,
}: {
  label: string;
  imageSource: string | StaticImageData;
}) => {
  return (
    <div className="flex-1 flex">
      <div className="rounded border-solid border-2 border-white-500 bg-greyish flex mx-2 my-2">
        <div className="w-2/12 px-2 py-2">
          <div className="relative w-12 h-12 ">
            <Image
              className="rounded-full border border-gray-100 shadow-sm"
              src={imageSource || 'https://randomuser.me/api/portraits/women/81.jpg'}
              alt="user image"
              height={300}
              width={200}
            />
          </div>
        </div>
        <div className="w-3/12 px-2 m-auto">
          <p className="text-white text-l">{label}</p>
        </div>
        <div className="w-auto px-2 m-auto">
          <ExploreButton label="Discover" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverBox;
