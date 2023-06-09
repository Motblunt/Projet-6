import React, { useState } from 'react';
import '../../CSS/Collapse.css';
import arrow from '../../Images/down-arrow.png';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="Open Arrow" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}