import React from 'react';
import cardsData from '../../data.json';
import { useParams } from 'react-router-dom';
import "./TitleLocation.css"


const HostContainer = () => {

  const { cardId } = useParams();
  const formattedCardId = cardId.includes('_') ? cardId.slice(cardId.indexOf('_') + 1) : cardId;
  const card = cardsData.find((card) => card.id === formattedCardId);

  return (
    <div className="main-container">
      <div className="container-title">
        <h1>{card.title}</h1>
        <p>{card.location}</p>
      </div>
    </div>
  );
};

export default HostContainer;