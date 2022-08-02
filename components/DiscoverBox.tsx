import Image from 'next/image';
import ExploreButton from './ExploreButton';

const DiscoverBox = ({ label = 'SignIn' }) => {
  return (
    <div className="bg-white padding: 5px">
      <a href="default.asp">
        <Image
          alt="Sign Up With GOOGLE"
          src={require('../components/assets/gicon.svg')}
          style={{ width: '40px', height: '40px' }}
        />
      </a>
    </div>
  );
};

export default DiscoverBox;
