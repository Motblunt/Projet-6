import React from 'react';
import Banner from '../Banner/Banner';
import ImageBannerInfo from '../ImageBannerInfo/ImageBannerInfo';

const infos = () => {
    return (
        <div>
            <Banner />
            <ImageBannerInfo />
            <h1>Ceci est la page à propos</h1>
        </div>
    );
};

export default infos;