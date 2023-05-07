import React, { useState } from 'react';
import cardsData from '../../data.json';
import { useParams } from 'react-router-dom';
import "../Description/Description.css"
import DownArrow from "../../Collapse/down-arrow.png"

const Description = () => {
  const { cardId } = useParams();
  const formattedCardId = cardId.includes('_') ? cardId.slice(cardId.indexOf('_') + 1) : cardId;
  const card = cardsData.find((card) => card.id === formattedCardId);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? 'closed' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2>Description</h2>
        <img
          className={`collapse__arrow ${isCollapsed ? '' : 'rotate'}`}
          src={DownArrow}
          alt="Collapse arrow"
        />
      </div>
      <div className="collapse__content">
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default Description;
