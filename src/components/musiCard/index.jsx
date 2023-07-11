import React from 'react'
import "./musiCard.css"
import {  BiMusic } from "react-icons/bi";
import { Link } from 'react-router-dom';
import endpoints from '../../api/endpoints';
import { useQuery } from 'react-query';
import { useState } from 'react';
export default function MusiCard() {

    const [search, setSearch] = useState("");
    const { data, isLoading, isError, error } = useQuery(["getAllMusic"], () =>
      endpoints.getAllAudio()
    );
    const [selectedMusic, setSelectedMusic] = useState(undefined);

    const [results, setResults] = useState({});

    const handleSearch = async ({ currentTarget: input }) => {
      setSearch(input.value);
      try {
        // const url =`/?search=${input.value}`;
        // await axiosInstance.get(url);
      } catch (error) {
        console.log(error);
      }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;

  return (
    <div className="admin-section">
      <BiMusic className="admin-icon" />
      <h2>Músicas</h2>
      <p>Total: {data.length}</p>
      <Link className="dLink" to={"/Musicas"}>
        <button className="admin-btn">Gerenciar Músicas</button>
      </Link>
    </div>
  );
}
