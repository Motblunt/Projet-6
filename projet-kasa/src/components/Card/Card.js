import React from 'react';
import Data from '../data.json'

function Card() {
    return (
        <div className='card-wrapper'>
            {
                Data.map(data => {
                    return (
                        <div key={data.id} className='gallery'>
                            <div className='gallery-items' >
                                <img  src={data.cover} alt="" />
                                <p className='text-over'>{data.title}</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Card;