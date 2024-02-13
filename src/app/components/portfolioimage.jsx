import React from 'react'
import Image from 'next/image';

function PortfolioImage({ src, alt, setImageCount }) {
  
  const handleImageLoad = () => {
    setImageCount((prevState) => prevState + 1);
  };

  return (
  <Image
    src={src}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    onLoad={handleImageLoad}
  />
  );
}

export default PortfolioImage;