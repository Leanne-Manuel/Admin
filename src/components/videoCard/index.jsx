import React from 'react'
import './videoCard.css'
import { Link } from 'react-router-dom';
import { BiVideo } from "react-icons/bi";
import Aux from './Aux';
export default function VideoCard() {

  return (
    <div className="admin-section">
      <BiVideo className="admin-icon" />
      <h2>Vídeos</h2>
      <p>Total: <Aux/> </p>
      <Link className="dLink" to={"/Videos"}>
        <button className="admin-btn">Gerenciar Vídeos</button>
      </Link>
    </div>
  );
}
