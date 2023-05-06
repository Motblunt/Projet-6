import React, { useState } from 'react';
import "../Carousel/Carousel.css"
import RightArrow from "../Carousel/Right-Arrow.png"
import LeftArrow from "../Carousel/Left-Arrow.png"



function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className='carousel-container'>
         <div className="carousel">
      {images.length > 1 && (
        <img className="carousel__arrow carousel__arrow--left" src={LeftArrow} alt="Previous" onClick={handlePreviousClick} />
      )}
      <img className="carousel__image" src={images[currentImage]} alt={`Image ${currentImage}`} />
      {images.length > 1 && (
        <img className="carousel__arrow carousel__arrow--right" src={RightArrow} alt="Next" onClick={handleNextClick} />
      )}
    </div> 
    </div>
  
  );
}

export default Carousel;
