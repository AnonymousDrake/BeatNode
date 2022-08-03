import Image from 'next/image';
import ExploreButton from './ExploreButton';

const DiscoverBox = ({ label = 'Sample Song 1', imagesource = 'link' }) => {
  return (
    <div className="rounded border-solid border-2 border-white-500 bg-greyish flex mx-2 my-2">
      <div className="w-1/6 px-2 py-2">
        <div className="relative w-12 h-12 ">
          <img
            className="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
        </div>
      </div>
      <div className="w-4/6 px-2 m-auto">
        <p className="text-white text-2xl">{label}</p>
      </div>
      <div className="w-1/6 px-2 m-auto">
        <ExploreButton label="Discover" />
      </div>
    </div>
  );
};

export default DiscoverBox;
