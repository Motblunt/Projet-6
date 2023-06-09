import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../components/Data/data.json';
import Notfound from '../Pages/Notfound';
import Fichelogement from '../components/FicheLogement/Fichelogement';
import Banner from '../components/Banner/Banner';

const CardPage = () => {
  const { cardId } = useParams();    
  const card = cardsData.find((card) => card.id === cardId);



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
