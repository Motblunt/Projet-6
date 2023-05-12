import React from 'react';
import cardsData from '../data.json';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import '../FicheLogement/Fichelogement.css';
import RatingStar from './RatingStar/RatingStar';
import TagsButton from './TagsButton/TagsButton';
import Description from './Description/Description';
import Equipement from './Equipement/Equipement';
import Host from './Host/Host';
import TitleLocation from './TitleLocation/TitleLocation';

const FicheLogement = () => {
  const { cardId } = useParams(); 
  const card = cardsData.find((card) => card.id === cardId);

  return (
    <div>
      <Carousel images={card.pictures} />
      <div>

        <div className='div-wrapper'>
          <div className='title-tags'>
          <TitleLocation title={card.title} location={card.location} />
          <TagsButton tags={card.tags} />
        </div>
        <div className='flex-container'>
          <RatingStar rating={card.rating} />
          <Host host={card.host}/>          
        </div>
        </div>        
        <div className='collapse-display'>
          <div>
            <Description description={card.description}/>
          </div>
          <div>
            <Equipement equipments={card.equipments} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default FicheLogement;
