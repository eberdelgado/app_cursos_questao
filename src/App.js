import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimuladoPage from "./pages/Simulado"
import HomePage from "./pages/Home"
import MeusCursosPage from "./pages/User/MeusCursos";
import MyProfile from "./pages/User/MyProfile";
import { StageContextProvider } from "./context/StageContext";
import { SimuladoContextProvider } from "./context/SimuladoContext";
import { CursosContextProvider } from "./context/CursosContext";
import { UserContext, UserContextProvider } from "./context/UserContext";
import StorePage from "./pages/User/Store";


function App() {
  return (
    <UserContextProvider>
      <StageContextProvider>
        <SimuladoContextProvider>
          <CursosContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/simulado" element={<SimuladoPage />} /> 
                <Route path="/meuscursos" element={<MeusCursosPage />} />
                <Route path="/loja" element={<StorePage />} /> 
                <Route path="/meuperfil" element={<MyProfile />} />  
              </Routes>
            </Router>
          </CursosContextProvider>
        </SimuladoContextProvider>
      </StageContextProvider>
    </UserContextProvider>
  );
}

export default App;
