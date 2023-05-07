import { Routes, Route } from "react-router-dom"
import Accueil from "./Accueil/Accueil"
import About from "./About/About"
import Notfound from "./NotFount/Notfound.js"
import cardsData from '../components/data.json'
import CardPage from "../components/CardPage/Cardpage.js"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound/>} /> 
        <Route path="/logement/:cardId" element={<CardPage cardsData={cardsData} />} />       
      </Routes>
    </div>
  )
}

export default App;
