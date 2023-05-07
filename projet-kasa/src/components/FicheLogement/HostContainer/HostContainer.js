import React from 'react';
import cardsData from '../../data.json';
import { useParams } from 'react-router-dom';
import "../HostContainer/HostContainer.css"


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
        <div className="container-host">
          <span>{card.host.name}</span>
          <img src={card.host.picture} alt={card.host.name} />
        </div>
      </div>
    );
};

export default HostContainer;