import React, { useState } from 'react';
import "../Description/Description.css"
import DownArrow from "../../Collapse/down-arrow.png"

const Description = (props) => {


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
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Description;
