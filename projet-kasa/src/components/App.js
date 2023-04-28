import { Routes, Route } from "react-router-dom"
import Accueil from "./Accueil/Accueil"
import Info from "./Info/Infos"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  )
}

export default App;
