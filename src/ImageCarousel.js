import React, { useState, useEffect, useRef } from 'react';
import "./imageCarousel.css";

const ImageCarousel = ({ images, transitionTime = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => handleNext(), transitionTime);

    return () => clearInterval(intervalId);
  }, [transitionTime, images]); // Removed dependency array

  const imageTransitionStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: `transform ${transitionTime}ms ease-in-out`,
  };

  return (
    <div className="image-carousel">
      <div ref={imageRef} className="image-container" style={imageTransitionStyle}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className="carousel-image" />
        ))}
      </div>
      <button onClick={handlePrev} className="carousel-button prev">&#8592;</button>
      <button onClick={handleNext} className="carousel-button next">&#8594;</button>
    </div>
  );
};

export default ImageCarousel;
