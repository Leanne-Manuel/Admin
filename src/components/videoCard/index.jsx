import React from 'react'
import './videoCard.css'
import { Link } from 'react-router-dom';
import { BiVideo } from "react-icons/bi";
import endpoints from '../../api/endpoints';
import { useQuery } from 'react-query';
export default function VideoCard() {
    const { data, isLoading, isError, error } = useQuery(["getAllVideo"], () =>
      endpoints.getAllVideo()
    );

    if (isLoading) return <span>Carregando..</span>;
    if (isError) return <span>Erro:{error.message}</span>;
    if (!data) return <span>empty</span>;
    
    
  return (
    <div className="admin-section">
      <BiVideo className="admin-icon" />
      <h2>Vídeos</h2>
      <p>Total: {data.length}</p>
      <Link className="dLink" to={"/Videos"}>
        <button className="admin-btn">Gerenciar Vídeos</button>
      </Link>
    </div>
  );
}
