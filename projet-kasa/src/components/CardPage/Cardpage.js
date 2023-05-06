import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../data.json';
import Notfound from '../NotFount/Notfound';
import Fichelogement from '../FicheLogement/Fichelogement';
import Banner from '../Banner/Banner';

const CardPage = () => {
  const { cardId } = useParams();  
  const formattedCardId = cardId.includes("_") ? cardId.slice(cardId.indexOf("_") + 1) : cardId;
const card = cardsData.find((card) => card.id === formattedCardId);



  if (!card) {
    return <Notfound/>
  }

  return (
    <div>
      <Banner/>
      <Fichelogement/>
    </div>
  );
};

export default CardPage;
