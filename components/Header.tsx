import Image from 'next/image';
import { SearchField } from '@components';

const icon =
  'https://gcpimages.betterhalf.ai/category_config_images/Astrology/Home/Get+free+Kundali/PlaceholderKundaliRolledDownCard.png';

const Header = () => {
  return (
    <div className="px-[32px] py-[16px] 2xl:mx-32 justify-between flex flex-row">
      <div>
        <Image src={icon} width={18} height={18} alt="App Icon" />
        <text className="text-white text-xl pl-4 tracking-widest uppercase hidden sm:inline">
          BeatNode
        </text>
      </div>
      <SearchField />
      {/* <ProfileIcon /> */}
    </div>
  );
};

export default Header;
