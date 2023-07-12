import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import "../routes/mapa.css";
import Usuarios from "../pages/Usuarios/Usuarios";
import Musicas from "../pages/Musicas/Musicas";
import Videos from "../pages/Videos/Videos";
import { AuthContext } from "../context/AuthContext.tsx";
import RegForm from "../pages/SignUp";
import LoginForm from "../pages/Login";
import LayoutHome from "../components/LayoutHome";
import Upload from "../pages/Upload/index";
import EditUser from "../pages/edituser";
import SinglePage from "../pages/Single/Single";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/auth/">
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<RegForm />} />
      </Route>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <LayoutHome />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Musicas" element={<Musicas />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/:edit" element={<EditUser/>} />
        <Route path="/:VidTitle" element={<SinglePage />} />
      </Route>
    </Routes>
  );
}

function PrivateRoute({ children }) {
  const ctx = useContext(AuthContext);
  const location = useLocation();

  console.log(ctx);

  if (ctx.authData.isAuth === undefined) {
    return null;
  }

  if (ctx.authData.isAuth === "isLoggedOut") {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}
