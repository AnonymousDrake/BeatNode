import Image from 'next/image';

const Upload = () => (
  <div>
    <Image
      src={require('./assets/app-logo.svg')}
      height={48}
      width={48}
      alt="upload your audio sample"
    />
    <h3>Upload your sample here.</h3>
  </div>
);

export default Upload;
