import React from 'react';
import cardsData from '../data.json';
import { useParams } from 'react-router-dom';


const FicheLogement = () => {
    const { cardId } = useParams();  
    const formattedCardId = cardId.includes("_") ? cardId.slice(cardId.indexOf("_") + 1) : cardId;
  const card = cardsData.find((card) => card.id === formattedCardId);  


    return (
        <div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
        </div>
    );
};

export default FicheLogement;