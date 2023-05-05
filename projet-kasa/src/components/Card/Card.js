import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cardsData from '../data.json'

const CardGallery = () => {
    const [selectedCardId, setSelectedCardId] = useState(null);

    const handleCardClick = (cardId) => {
        setSelectedCardId(cardId);
    };

    const getCardIdFromKey = (key) => {
        return key.replace(/^\D+/g, '');
    };

    return (
        <div className='card-wrapper'>
            <div className="gallery">
                {cardsData.map((card) => (
                    <Link to={`/logement/${card.id}`} key={card.id} className="card">
                        <div
                            key={card.id}
                            className="gallery-items"
                            onClick={() => handleCardClick(card.id)}
                        >
                            <img src={card.cover} alt={card.title} />
                            <p className='text-over'>{card.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CardGallery;
