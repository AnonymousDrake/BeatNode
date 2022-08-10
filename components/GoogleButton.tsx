import Image from 'next/image';
import { memo } from 'react';

const GoogleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="bg-transparent px-[5px] self-center my-[12px]">
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
