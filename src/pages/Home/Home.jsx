import React from "react";
import "./home.css";
import "../../components/MRHome";
import foto from "../../images/logo.png";
import { Link } from "react-router-dom";

import { BiUser, BiMusic, BiVideo } from "react-icons/bi";

export default function Home() {
  const userCount = 100;
  const musicCount = 70;
  const videoCount = 25;

  return (
    <div className="home-container">
      <header>
        <img src={foto} alt="Foto de Perfil" className="profile-image" />{" "}
        <h1>Administrador</h1>
      </header>
      <div className="admin-sections">
        <div className="admin-section">
          <BiUser className="admin-icon" />
          <h2>Usuários</h2>
          <p>Total: {userCount}</p>
          <Link className="dLink" to={"/Usuarios"}>
            <button className="admin-btn">Gerenciar Usuários</button>
          </Link>
        </div>
        <div className="admin-section">
          <BiMusic className="admin-icon" />
          <h2>Músicas</h2>
          <p>Total: {musicCount}</p>
          <Link className="dLink" to={"/Musicas"}>
            <button className="admin-btn">Gerenciar Músicas</button>
          </Link>
        </div>
        <div className="admin-section">
          <BiVideo className="admin-icon" />
          <h2>Vídeos</h2>
          <p>Total: {videoCount}</p>
          <Link className="dLink" to={"/Videos"}>
            <button className="admin-btn">Gerenciar Vídeos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
