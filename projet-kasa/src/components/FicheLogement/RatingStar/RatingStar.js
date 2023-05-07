import React from 'react';
import cardsData from '../../data.json';
import { useParams } from 'react-router-dom';
import GreyStar from "../RatingStar/GreyStar.png"
import PinkStar from "../RatingStar/PinkStar.png"
import "../RatingStar/RatingStar.css"




const RatingStar = () => {

    const { cardId } = useParams();
    const formattedCardId = cardId.includes('_') ? cardId.slice(cardId.indexOf('_') + 1) : cardId;
    const card = cardsData.find((card) => card.id === formattedCardId);

    const maxRating = 5;
    const starWidth = 24;
  
    
    const numFullStars = Math.floor(card.rating);
    const fullStars = Array(numFullStars).fill().map((_, index) => (
      <img key={`full-star-${index}`} src={PinkStar} alt="Full star" width={starWidth} />
    ));
  
    
    const numEmptyStars = maxRating - numFullStars;
    const emptyStars = Array(numEmptyStars).fill().map((_, index) => (
      <img key={`empty-star-${index}`} src={GreyStar} alt="Empty star" width={starWidth} />
    ));
  
    return (
      <div className="star-rating">
        <span className="star-rating__stars">{fullStars}{emptyStars}</span>        
      </div>
    );
  }

export default RatingStar;