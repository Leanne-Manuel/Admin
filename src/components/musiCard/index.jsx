import React from 'react'
import "./musiCard.css"
import {  BiMusic } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Aux from './Aux';

export default function MusiCard() {


  return (
    <div className="admin-section">
      <BiMusic className="admin-icon" />
      <h2>Músicas</h2>
      <p>Total: <Aux/></p>
      <Link className="dLink" to={"/Musicas"}>
        <button className="admin-btn">Gerenciar Músicas</button>
      </Link>
    </div>
  );
}
