import React, { useState } from 'react';
import "../Equipement/Equipement.css"
import DownArrow from "../../Collapse/down-arrow.png"

const Equipment = (props) => {


  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? 'closed' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2>Équipements</h2>
        <img
          className={`collapse__arrow ${isCollapsed ? '' : 'rotate'}`}
          src={DownArrow}
          alt="Collapse arrow"
        />
      </div>
      <div className="collapse__content">
        <ul>
          {props.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Equipment;