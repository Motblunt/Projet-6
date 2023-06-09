import React from 'react';
import '../../CSS/Footer.css'
import LOGOFooter from '../../Images/Footer-Logo.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={LOGOFooter} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;