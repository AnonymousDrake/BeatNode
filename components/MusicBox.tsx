import Image from 'next/image';
// Music Box Incomplete
const MusicBox = ({ label = 'SignIn' }) => {
  return (
    <div className="bg-cover bg-center h-80 w-80 bg-red display: flex position:relative">
      <Image src={require('../components/assets/horse.svg')} />

      <div className="place-self-end" style={{ position: 'absolute', top: 0 }}>
        <h1 className="text-white text-3xl font-bold font-poppins">Top 500 Beats</h1>
        <br></br>
        <h3 className="text-white font-bold">India</h3>
      </div>
    </div>
  );
};

export default MusicBox;
