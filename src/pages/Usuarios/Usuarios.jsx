import React from "react";
import "./Usuarios.css";
import "../../components/MRHome";
import { MdEdit, MdDelete } from "react-icons/md";
import endpoints from "../../api/endpoints";
import { useQuery } from "react-query";
//import { useState, useEffect } from "react";
function Usuarios() {
  
 const { data, isLoading, isError, error } = useQuery(
   ["getAllUsers"],
   () => endpoints.gettAllUsers()
 );

 if (isLoading) return <span>Carregando...</span>;

 if (isError) return <span>Erro: {error.message}</span>;
 if (!data.data) {
   return <span>Não existe Items dessa categoria</span>;
 }


    return (
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Canal</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((user) => (
              <tr key={user.id}>
                <td>{user.name} {user.lastname}</td>
                <td>{user.login.email}</td>
                <td>{user.canal}</td>
                <td className="actions-cell">
                  <button className="edit-button">
                    <MdEdit />
                  </button>
                  <button className="delete-button">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Usuarios;
