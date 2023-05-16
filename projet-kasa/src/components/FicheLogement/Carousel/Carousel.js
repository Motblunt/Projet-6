import React, { useState } from 'react';
import "../Carousel/Carousel.css"
import RightArrow from "./Right-Arrow.png"
import LeftArrow from "./Left-Arrow.png"

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = images.length;

  const handlePreviousClick = () => {
    setCurrentImage(currentImage === 0 ? totalImages - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % totalImages);
  };

  return (
    <div className='carousel-container'>
      <div className="carousel">
        {totalImages > 1 && (
          <img className="carousel__arrow carousel__arrow--left" src={LeftArrow} alt="Previous" onClick={handlePreviousClick} />
        )}
        <img className="carousel__image" src={images[currentImage]} alt={` ${currentImage}`} />
        {totalImages > 1 && (
          <img className="carousel__arrow carousel__arrow--right" src={RightArrow} alt="Next" onClick={handleNextClick} />
        )}
        {totalImages > 1 && (
          <div className="carousel__counter">
            {`${currentImage + 1}/${totalImages}`}
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
