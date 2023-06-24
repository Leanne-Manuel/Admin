import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../pages/Home/Home";
import '../routes/mapa.css'
import Usuarios from "../pages/Usuarios/Usuarios";
import Musicas from "../pages/Musicas/Musicas";
import Videos from "../pages/Videos/Videos";

export default function MainRoutes(){
    return(
        <div className="divgeral">
            <Router>
                <Menu></Menu>
                
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/Videos" element={<Videos/>}/>
                        <Route path="/Musicas" element={<Musicas/>}/>
                        <Route path="/Usuarios" element={<Usuarios/>}/>
                </Routes>
            </Router>
        </div>
    )
}