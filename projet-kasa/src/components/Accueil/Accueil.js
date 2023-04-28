import React from 'react';
import Banner from '../Banner/Banner';
import ImageBanner from '../ImageBanner/ImageBanner';

const Accueil = () => {
    return (
        <div>
            <Banner />
            <ImageBanner />            
            <h1>Ceci est la page d'accueil</h1>
        </div>
    );
};

export default Accueil;