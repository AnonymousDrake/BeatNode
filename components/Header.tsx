import Image from 'next/image';
import { SearchField, UserProfile } from '@components';

const Header = () => {
  return (
    <div className="flex flex-1 flex-row items-center justify-between">
      <div className="flex flex-row flex-[2] items-center px-[12px]">
        <Image src={require('./assets/app-logo.svg')} width={94} height={64} alt="App Icon" />
        <SearchField />
      </div>
      <div className="flex flex-row flex-[1] items-center justify-end px-[12px]">
        <UserProfile />
      </div>
    </div>
  );
};

export default Header;
