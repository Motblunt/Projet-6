import React from 'react';
import Banner from '../Banner/Banner';
import ImageBanner from '../ImageBanner/ImageBanner';
import "../Card/Card.css"
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

const Accueil = () => {
    return (
        <div>
            <Banner />
            <ImageBanner />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Accueil;