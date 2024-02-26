import React from 'react'
import Image from 'next/image';

function PortfolioImageWithVideo({ src, srcVideo, alt, setImageCount, right, top, height }) {

  const handleImageLoad = () => {
    setImageCount((prevState) => prevState + 1);
  };

  return (
    <div style={{position: 'relative'}}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        onLoad={handleImageLoad}
      />
      <video
        playsInline
        autoPlay
        muted
        loop
        preload='auto'
        type='video/mp4'
        src={`${srcVideo}#t=0.001`}
        style={{ height: height, position: 'absolute', right: right, top: top, boxSizing: 'border-box'}}
      ></video>

    </div>
  );
}

export default PortfolioImageWithVideo;