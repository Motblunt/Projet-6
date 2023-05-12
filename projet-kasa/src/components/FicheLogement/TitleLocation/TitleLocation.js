import React from 'react';
import "./TitleLocation.css"


const HostContainer = (props) => {
  

  return (
    <div className="main-container">
      <div className="container-title">
        <h1>{props.title}</h1>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

export default HostContainer;