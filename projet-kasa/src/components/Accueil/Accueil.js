import React from 'react';
import Banner from '../Banner/Banner';
import ImageBanner from '../ImageBanner/ImageBanner';
import Card from '../Card/Card';
import "../Card/Card.css"
import Footer from '../Footer/Footer';

const Accueil = () => {
    return (
        <div>
            <Banner />
            <ImageBanner />
            <Card />
            <Footer />
        </div>
    );
};

export default Accueil;