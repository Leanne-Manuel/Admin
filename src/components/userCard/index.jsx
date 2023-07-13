import React from 'react'
import './userCard.css'
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import Aux from './Aux.jsx';
export default function UserCard() {



  return (
    <div className="admin-section">
      <BiUser className="admin-icon" />
      <h2>Usuários</h2>
      <p>Total: <Aux/></p>
      <Link className="dLink" to={"/Usuarios"}>
        <button className="admin-btn">Gerenciar Usuários</button>
      </Link>
    </div>
  );
}
