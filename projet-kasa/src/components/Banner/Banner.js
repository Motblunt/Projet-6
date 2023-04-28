import "../Banner/Banner.css"
import LOGO from '../Banner/LOGO.svg'
import { Link } from "react-router-dom"

function Banner() {
    return (
        <nav> 
            <img className="logo" src={LOGO} alt="" />  
                       
            <ul className="nav-bar">
                <Link className="items" to="/">Accueil</Link>            
                <Link className="items" to="/info">A propos</Link> 
            </ul>            
        </nav>        
     )
}

export default Banner
