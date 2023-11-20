import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimuladoPage from "./pages/Simulado"
import HomePage from "./pages/Home"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Simulado" element={<SimuladoPage />} /> 
          <Route path="/" element={<HomePage />} /> 
        
        </Routes>
      </Router>
    
  );
}

export default App;
