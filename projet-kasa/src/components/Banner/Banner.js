import "../../CSS/Banner.css"
import LOGO from '../../Images/LOGO.svg'
import { NavLink } from "react-router-dom"

function Banner() {
    return (
        <nav> 
            <img className="logo" src={LOGO} alt="" />  
                       
            <ul className="nav-bar">
                <NavLink className="active-link" to="/">Accueil</NavLink>            
                <NavLink className="active-link" to="/about">A propos</NavLink> 
            </ul>            
        </nav>        
     )
}

export default Banner
