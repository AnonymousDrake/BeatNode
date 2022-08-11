import Image from 'next/image';
import { SearchField } from '@components';

const Header = () => {
  return (
    <>
      <div className="flex flex-row w-screen py-[8px] items-center">
        <Image src={require('./assets/app-logo.svg')} width={94} height={64} alt="App Icon" />
        <SearchField />
      </div>
      <div className="w-[2px] h-screen bg-lightOrange" />
    </>
  );
};

export default Header;
