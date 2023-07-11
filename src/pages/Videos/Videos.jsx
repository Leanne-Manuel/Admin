import React from "react";
import "./Videos.css";
import { MdModeEdit, MdDelete } from "react-icons/md";
import endpoints from "../../api/endpoints";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const url = "http://localhost:3443/api/";
function Videos(){

  const {data, isLoading, isError, error}= useQuery(["getAllVideo"], ()=> endpoints.getAllVideo());

    if(isLoading) return <span>Carregando..</span>
    if(isError) return <span>Erro:{error.message}</span>
    if(!data) return <span>empty</span>
    
    
    return (
      <div className="news-feed">
        <h1>Vídeos</h1>
        <div className="news-container">
          {data.map((video, index) => (
            <Link to={"/"+video.id}>
              <div className="news-item" key={index}>
                <img
                  src={url + "file/" + video.coverpath.split("/")[0]}
                  alt=""
                />
                <div className="news-content">
                  <h2>{video.titulo}</h2>
                </div>
                <div className="news-actions">
                  <button className="edit-button">
                    <MdModeEdit />
                  </button>
                  <button className="delete-button">
                    <MdDelete />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

export default Videos;
