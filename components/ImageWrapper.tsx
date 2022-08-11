import Image, { ImageProps } from 'next/image';
import { memo } from 'react';

const ImageWrapper = ({
  imageProps,
  height,
  width,
}: {
  imageProps?: ImageProps;
  height: number;
  width: number;
}) => {
  const { src, alt, ...restProps } = imageProps || {
    src: require('./assets/image-placeholder.svg'),
    alt: 'img-song',
  };
  return (
    <div className="bg-[#C4C4C4] rounded-3xl scale-95 hover:scale-100 ">
      <Image
        src={src}
        alt={alt}
        className="opacity-10 rounded-lg "
        height={height || 200}
        width={width || 180}
        {...restProps}
      />
    </div>
  );
};

export default memo(ImageWrapper);
