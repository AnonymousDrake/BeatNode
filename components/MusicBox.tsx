import Image from 'next/image';

const MusicBox = ({ label = 'SignIn' }) => {
  return (
    <div className="bg-[url('../components/assets/technology-g2c4abdefe_1920.jpg')] h-80 w-80">
      <h1 className="text-white font-bold">Top 500 Beats</h1>
      <br></br>
      <h3 className="text-white font-bold">India</h3>
    </div>
  );
};

export default MusicBox;
