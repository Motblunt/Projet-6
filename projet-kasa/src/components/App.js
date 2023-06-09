import { Routes, Route } from "react-router-dom"
import Accueil from "../Pages/Accueil"
import About from "../Pages/About"
import Notfound from "../Pages/Notfound"
import CardPage from "../Pages/Cardpage.js"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound/>} /> 
        <Route path="/logement/:cardId" element={<CardPage/>} />       
      </Routes>
    </div>
  )
}

export default App;
