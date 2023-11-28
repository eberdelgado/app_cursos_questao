import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimuladoPage from "./pages/Simulado"
import HomePage from "./pages/Home"
import MeusCursosPage from "./pages/User/MeusCrusos";
import { StageContextProvider } from "./context/StageContext";
import { SimuladoContextProvider } from "./context/SimuladoContext";

function App() {
  return (
    
    <StageContextProvider>
      <SimuladoContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/Simulado" element={<SimuladoPage />} /> 
          <Route path="/meuscursos" element={<MeusCursosPage />} /> 
        </Routes>
      </Router>
      </SimuladoContextProvider>
    </StageContextProvider>
  );
}

export default App;
