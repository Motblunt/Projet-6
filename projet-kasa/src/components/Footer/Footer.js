import React from 'react';
import '../Footer/Footer.css'
import LOGOFooter from '../Footer/Footer-Logo.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={LOGOFooter} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;