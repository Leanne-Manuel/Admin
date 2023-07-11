import React , { useContext } from "react";
import "./styles/menu.css";
import "../components/BotaoMenu";
import BotaoMenu from "../components/BotaoMenu";
import { Link } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PeopleIcon from "@mui/icons-material/People";
import { AuthContext } from "../context/AuthContext.tsx";
import {
  Home,
  VideoFile,
  MusicNote,
  Logout,
  AccountBoxRounded,
} from "@mui/icons-material";

export default function Menu() {
 const { logOut, user } = useContext(AuthContext);
 console.log(user);
  
  return (
    <div className="corpoM">
      <div className="logotipo">
        <h1>Unify</h1>
      </div>

      <div>
        <ul>
          <li className="posiICO">
            <Home className="Bsp"></Home>
            <Link className="dLink" to={"/"}>
              <BotaoMenu nome="Home" />
            </Link>
          </li>

          <li className="posiICO">
            <PeopleIcon className="Bsp"></PeopleIcon>
            <Link className="dLink" to={"/Usuarios"}>
              <BotaoMenu nome="Usuários" />
            </Link>
          </li>
          <li className="posiICO">
            <VideoFile className="Bsp"></VideoFile>
            <Link className="dLink" to={"/Videos"}>
              <BotaoMenu nome="Vídeos" />
            </Link>
          </li>
          <li className="posiICO">
            <MusicNote className="Bsp"></MusicNote>
            <Link className="dLink" to={"/Musicas"}>
              <BotaoMenu nome="Músicas" />
            </Link>
          </li>
          <li className="posiICO">
            <AccountBoxRounded className="Bsp"></AccountBoxRounded>
            <Link className="dLink" to={"/Perfil"}>
              <BotaoMenu nome="Minha conta" />
            </Link>
          </li>
          <li className="posiICO">
            <CloudUploadIcon className="Bsp"></CloudUploadIcon>
            <Link className="dLink" to={"/Upload"}>
              <BotaoMenu nome="Upload" />
            </Link>
          </li>
          <li className="posiICO logout">
            <Logout className="Bsp"></Logout>
            <button className="dLink" type="button" onClick={() => logOut()}>
              <BotaoMenu nome="Sair"></BotaoMenu>{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
