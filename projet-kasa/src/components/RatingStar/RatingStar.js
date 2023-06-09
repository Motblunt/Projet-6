import React from 'react';
import GreyStar from "../../Images/GreyStar.png"
import PinkStar from "../../Images/PinkStar.png"
import "../../CSS/RatingStar.css"


const RatingStar = (props) => { 

    const maxRating = 5;
    const starWidth = 24;
  
    
    const numFullStars = Math.floor(props.rating);
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