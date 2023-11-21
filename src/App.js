import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimuladoPage from "./pages/Simulado"
import HomePage from "./pages/Home"
import MeusCursosPage from "./pages/User/MeusCrusos";
import { StageContextProvider } from "./context/StageContext";

function App() {
  return (
    <StageContextProvider>
      <Router>
        <Routes>
          <Route path="/Simulado" element={<SimuladoPage />} /> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/meuscursos" element={<MeusCursosPage />} /> 
        </Routes>
      </Router>
    </StageContextProvider>
  );
}

export default App;
