import React from 'react';

type BackgroundProps = {
    src?: string;
    alt?: string;
    }

const Background: React.FC<BackgroundProps> = ({src, alt}) => {
  return <img
        src={src}
        alt={alt}
        className="fixed object-cover w-full h-screen z-[-1]"
      />;
}

export default Background;