import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import PaginaAindaNaoCriada from "./Components/Helper/PaginaAindaNaoCriada";
import Home from "./Components/Home";
import Servicos from "./Components/NavMenu/Servicos";
import Informacoes from "./Components/NavMenu/Informacoes";
import Contato from "./Components/NavMenu/Contato";
import Room from "./Components/Quartos/Room";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Components/Usuarios/User";

const App = () => {

  return (
      <div className={"container"}>
          <BrowserRouter>
              <UserStorage>
                  <Header />
                  <Routes>
                      <Route path={"/"} element={<Home />} />
                      <Route path={"informacoes"} element={<Informacoes />} />
                      <Route path={"servicos"} element={<Servicos />} />
                      <Route path={"contato"} element={<Contato />} />
                      <Route path={"login/*"} element={<Login />} />
                      <Route path={"quarto/*"} element={<Room />} />
                      <Route path={"conta/*"} element={<User />} />
                      <Route path={"*"} element={<PaginaAindaNaoCriada />} />
                  </Routes>
                  <Footer />
              </UserStorage>
          </BrowserRouter>
      </div>
  );
}

export default App;
