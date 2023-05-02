import React from 'react';
import Banner from '../Banner/Banner';
import ImageBanner from '../ImageBanner/ImageBanner';
import Card from '../Card/Card';
import "../Card/Card.css"


const Accueil = () => {
    return (
        <div>
            <Banner />
            <ImageBanner />            
            <Card/>         
            
        </div>
    );
};

export default Accueil;