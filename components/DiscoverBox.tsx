import Image from 'next/image';
import ExploreButton from './ExploreButton';

const DiscoverBox = ({ label = 'Sample Song 1', imagesource = 'link' }) => {
  return (
    <div className="bg-px-2">
      <div className="flex -mx-2">
        <div className="w-1/6 px-2">
          <div className="bg-orange h-12" />
        </div>
        <div className="w-4/6 px-2">
          <p className="text-white text-2xl py-2">{label}</p>
        </div>
        <div className="w-1/6 px-2 py-2 .content-between">
          <ExploreButton label="Discover" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverBox;
