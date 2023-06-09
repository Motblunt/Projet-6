import React from 'react';
import "../TitleLocation/TitleLocation"


const Host = (props) => { 

    return (
        <div>
            <div className="container-host">
                <span>{props.host.name}</span>
                <img src={props.host.picture} alt={props.host.name} />
            </div>
        </div>
    );
};

export default Host;