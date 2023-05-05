import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../data.json';
import Notfound from '../NotFount/Notfound';
import Fichelogement from '../FicheLogement/Fichelogement';

const CardPage = () => {
  const { cardId } = useParams();  
  const formattedCardId = cardId.includes("_") ? cardId.slice(cardId.indexOf("_") + 1) : cardId;
const card = cardsData.find((card) => card.id === formattedCardId);



  if (!card) {
    return <Notfound/>
  }

  return (
    <div>
      <Fichelogement/>
    </div>
  );
};

export default CardPage;
