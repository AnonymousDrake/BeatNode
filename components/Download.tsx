import Image from 'next/image';

const Download = () => (
  <div>
    <Image
      src={require('./assets/app-logo.svg')}
      height={48}
      width={48}
      alt="download cloned voice"
    />
    <h3>Download cloned voice here.</h3>
  </div>
);

export default Download;
