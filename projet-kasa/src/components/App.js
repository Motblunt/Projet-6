import { Routes, Route } from "react-router-dom"
import Accueil from "./Accueil/Accueil"
import About from "./About/About"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
