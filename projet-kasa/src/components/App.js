import { Routes, Route } from "react-router-dom"
import Accueil from "./Accueil/Accueil"
import About from "./About/About"
import Notfound from "./NotFount/Notfound.js"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound/>} />        
      </Routes>
    </div>
  )
}

export default App;
