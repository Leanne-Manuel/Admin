import React from "react";
import "./home.css";
import "../../components/MRHome";
import foto from "../../images/logo.png";
import { Link } from "react-router-dom";
import VideoCard from "../../components/videoCard";
import MusiCard from "../../components/musiCard";
import UserCard from "../../components/userCard";


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
         <UserCard/>
         <MusiCard/>
         <VideoCard/>
      </div>
    </div>
  );
}
