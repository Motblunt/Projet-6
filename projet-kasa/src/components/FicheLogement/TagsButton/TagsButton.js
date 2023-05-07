import React from 'react';
import cardsData from '../../data.json';
import { useParams } from 'react-router-dom';
import "../TagsButton/TagsButton.css"


const TagsButton = () => {

    const { cardId } = useParams();
    const formattedCardId = cardId.includes('_') ? cardId.slice(cardId.indexOf('_') + 1) : cardId;
    const card = cardsData.find((card) => card.id === formattedCardId);

    return (

        <div className="tags-name">
            {card.tags.map((tag) => (
                <button key={tag} className="tag-button">
                    {tag}
                </button>
            ))}
        </div>

    );
};

export default TagsButton;