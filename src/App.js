import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimuladoPage from "./pages/Simulado"
import HomePage from "./pages/Home"
import MeusCursosPage from "./pages/User/MeusCursos";
import MyProfile from "./pages/User/MyProfile";
import StorePage from "./pages/User/Store";
import LoginPage from "./pages/Login";
import { StageContextProvider } from "./context/StageContext";
import { SimuladoContextProvider } from "./context/SimuladoContext";
import { CursosContextProvider } from "./context/CursosContext";
import { useUserContext } from "./hook/context/useUserContext";
import SobrePage from "./pages/Sobre";



function App() {
  const {isLog} = useUserContext()
  return (

      <StageContextProvider>
        <SimuladoContextProvider>
          <CursosContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage/>}/> 
                <Route path="/simulado" element={isLog?<SimuladoPage />:<HomePage />} /> 
                <Route path="/meuscursos" element={isLog?<MeusCursosPage />:<HomePage />} />
                <Route path="/loja" element={<StorePage />} /> 
                <Route path="/meuperfil" element={isLog?<MyProfile />:<HomePage />} /> 
                <Route path="/sobre" element={<SobrePage />} />  
              </Routes>
            </Router>
          </CursosContextProvider>
        </SimuladoContextProvider>
      </StageContextProvider>

  );
}

export default App;
