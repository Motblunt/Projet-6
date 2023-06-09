import React from 'react';
import Banner from '../components/Banner/Banner';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';

const Accueil = () => {
    return (
        <div >
            <Banner />
            <ImageBanner />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Accueil;