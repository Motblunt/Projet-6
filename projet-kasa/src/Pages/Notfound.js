import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import "../CSS/Notfound.css"

const Notfound = () => {
    return (
        <div >
            <Banner />
            <div className='display-flex'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <p><NavLink className={"active-nav"} to="/">Retourner sur la page d’accueil</NavLink></p>
            </div>

        </div>
    );
};

export default Notfound;