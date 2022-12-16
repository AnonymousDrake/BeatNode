import Image from 'next/image';
import { memo } from 'react';

const GoogleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="bg-white shadow-lg px-[5px] flex self-center my-[12px] cursor-pointer items-center py-1 rounded-full">
      <Image
        onClick={onClick}
        alt="Google login"
        src={require('../components/assets/google-icon.png')}
        height="32px"
        width="32px"
      />
    </div>
  );
};

export default memo(GoogleButton);
