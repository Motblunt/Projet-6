import React from 'react';
import "../../CSS/TagsButton.css"


const TagsButton = (props) => {


    return (

        <div className="tags-name">
            {props.tags.map((tag) => (
                <button key={tag} className="tag-button">
                    {tag}
                </button>
            ))}
        </div>

    );
};

export default TagsButton;