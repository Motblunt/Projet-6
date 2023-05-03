import React from 'react';
import Banner from '../Banner/Banner';
import ImageBannerInfo from '../ImageBannerInfo/ImageBannerInfo';
import Footer from '../Footer/Footer';
import Collapse from '../Collapse/Collapse';

const infos = () => {
    return (
        <div>
            <Banner />            
            <ImageBannerInfo />
            <Collapse />
            <Footer />

        </div>
    );
};

export default infos;