import React from 'react';
import cardsData from '../data.json';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import '../FicheLogement/Fichelogement.css';

const FicheLogement = () => {
  const { cardId } = useParams();
  const formattedCardId = cardId.includes('_') ? cardId.slice(cardId.indexOf('_') + 1) : cardId;
  const card = cardsData.find((card) => card.id === formattedCardId);

  return (
    <div>
      <Carousel images={card.pictures} />
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
        <div>
          <div className="tags-name">
            {card.tags.map((tag) => (
              <button key={tag} className="tag-button">
                {tag}
              </button>
            ))}
          </div>
        </div>
      
    </div>
  );
};

export default FicheLogement;
