import Image from 'next/image';
import { memo } from 'react';
// Music Box Incomplete
const Album = ({ label = 'SignIn' }) => {
  return (
    <div className="bg-cover bg-center h-80 w-80 bg-red display: flex position:relative">
      <Image src={require('../components/assets/horse.svg')} alt="Hello" />

      <div className="place-self-end" style={{ position: 'absolute', top: 0 }}>
        <h1 className="text-white text-3xl font-bold font-poppins">{label}</h1>
        <br></br>
        <h3 className="text-white font-bold">India</h3>
      </div>
    </div>
  );
};

export default memo(Album);
