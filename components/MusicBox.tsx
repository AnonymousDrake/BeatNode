import Image from 'next/image';

const MusicBox = ({ label = 'SignIn' }) => {
  return (
    <div className="bg-white padding: 5px">
      <a href="default.asp">
        <Image
          alt="Sign Up With GOOGLE"
          src={require('https://api.napster.com/imageserver/v2/artists/Art.44069/images/230x153.jpg')}
          style={{ width: '40px', height: '40px' }}
        />
      </a>
    </div>
  );
};

export default MusicBox;
