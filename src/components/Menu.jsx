import React from "react";
import "./styles/menu.css";
import "../components/BotaoMenu";
import BotaoMenu from "../components/BotaoMenu";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="corpoM">
      <div className="logotipo">
        <h1>Unify</h1>
      </div>

      <div>
        <ul>
          <li>
            <Link className="dLink" to={"/"}>
              <BotaoMenu nome="Home"/>
            </Link>
          </li>

          <li>
            <Link className="dLink" to={"/Usuarios"}>
              <BotaoMenu nome="Usuários"/>
            </Link>
          </li>
          <li>
            <Link className="dLink" to={"/Videos"}>
              <BotaoMenu nome="Vídeos"/>
            </Link>
          </li>
          <li>
            <Link className="dLink" to={"/Musicas"}>
              <BotaoMenu nome="Músicas"/>
            </Link>
          </li>
          <li>
            <Link className="dLink" to={"/Perfil"}>
              <BotaoMenu nome="Minha conta"/>
            </Link>
          </li>
          <li>
            <Link className="dLink" to={"/Upload"}>
              <BotaoMenu nome="Upload"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
