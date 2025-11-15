import { useState, useEffect } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const images = [image1, image2, image3, image1, image2, image3];

const SlideshowBackground = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % (images.length / 3));
    }, 5000); // Change frame every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getFrameImages = (frameIndex: number) => {
    const startIndex = frameIndex * 3;
    return images.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="absolute inset-0 w-full h-full z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      {Array.from({ length: Math.ceil(images.length / 3) }).map((_, frameIndex) => (
        <div
          key={frameIndex}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentFrame === frameIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex h-full">
            {getFrameImages(frameIndex).map((src, imgIndex) => (
              <div key={imgIndex} className="w-1/3 h-full overflow-hidden">
                <img
                  src={src}
                  alt={`Slideshow image ${frameIndex * 3 + imgIndex + 1}`}
                  className="w-full h-full object-cover filter blur-sm animate-ken-burns"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideshowBackground;
