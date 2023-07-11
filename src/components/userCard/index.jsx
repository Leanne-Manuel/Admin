import React from 'react'
import './userCard.css'
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import endpoints from '../../api/endpoints';
import { useQuery } from 'react-query';
export default function UserCard() {

     const { data, isLoading, isError, error } = useQuery(["getAllUsers"], () =>
       endpoints.gettAllUsers()
     );

     if (isLoading) return <span>Carregando...</span>;

     if (isError) return <span>Erro: {error.message}</span>;
     if (!data.data) {
       return <span>Não existe Items dessa categoria</span>;
     }

  return (
    <div className="admin-section">
      <BiUser className="admin-icon" />
      <h2>Usuários</h2>
      <p>Total:{data.data.length}</p>
      <Link className="dLink" to={"/Usuarios"}>
        <button className="admin-btn">Gerenciar Usuários</button>
      </Link>
    </div>
  );
}
