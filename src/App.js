import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioS from "./components/inicio_sesion/inicio_sesion";
import ResContra from "./components/res_contra/res_contra";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/rescontra" element={<ResContra />} />
        <Route exact path="/" element={<InicioS />} />
      </Routes>
    </Router>
  );
}

export default App;
