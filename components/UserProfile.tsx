import Image from 'next/image';
import { memo } from 'react';

const UserProfile = () => (
  <div className="flex flex-row self-end">
    <h1 className="text-white px-8 text-[18px]">Hello, Ekam</h1>
    <Image
      alt="user-image"
      src={require('./assets/user-profile.svg')}
      height={26}
      width={26}
      style={{ marginLeft: 24 }}
    />
  </div>
);

export default memo(UserProfile);
