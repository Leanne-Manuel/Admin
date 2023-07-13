import React from 'react'
import endpoints from "../../api/endpoints";
import { useQuery } from "react-query";
export default function Aux() {
  
    const { data, isLoading, isError, error } = useQuery(["getAllMusic"], () =>
      endpoints.getAllAudio()
    );
    if (isLoading) return <span>Carregando...</span>;

    if (isError) return <span>Erro: {error.message}</span>;
    if (!data) {
      return <span>0</span>;
    }
    
  return <>{data.length}</>;
}
