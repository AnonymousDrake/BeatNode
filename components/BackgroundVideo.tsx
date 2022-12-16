import { memo } from 'react';

const BackgroundVideo = () => (
  <video autoPlay loop style={{ width: '100vw', height: '100vh' }}>
    <source src="https://assets.codepen.io/3364143/7btrrd.mp4" />
  </video>
);

export default memo(BackgroundVideo);
