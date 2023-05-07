import React from 'react';
import cardsData from '../data.json';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import '../FicheLogement/Fichelogement.css';
import RatingStar from './RatingStar/RatingStar';
import TagsButton from './TagsButton/TagsButton';
import HostContainer from './HostContainer/HostContainer';
import Description from './Description/Description';
import Equipement from './Equipement/Equipement';

const FicheLogement = () => {
  const { cardId } = useParams();
  const formattedCardId = cardId.includes('_') ? cardId.slice(cardId.indexOf('_') + 1) : cardId;
  const card = cardsData.find((card) => card.id === formattedCardId);

  return (
    <div>
      <Carousel images={card.pictures} />
      <HostContainer />
      <div>
        <div className='flex-container'>
          <TagsButton />
          <RatingStar />
        </div>
        <div className='collapse-display'>
          <div>
            <Description/>
          </div>
          <div>
            <Equipement/>
          </div>
          
        </div>        
      </div>

    </div>
  );
};

export default FicheLogement;
