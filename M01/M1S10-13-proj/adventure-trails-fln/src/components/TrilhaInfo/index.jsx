import React from "react";
import useFetch from "../../Hooks/useFetch";
import CardTrilha from "../CardTrilha";

import { TrilhasContext } from "./../../context/TrilhasContext";
import { useContext } from "react";

import "./style.css";

function TrilhaInfo() {
  const { trilhas } = useContext(TrilhasContext);

  if (!trilhas.data) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="info-class">
      {trilhas.data.map((trilha, index) => (
        <CardTrilha key={index} dadosTrilha={trilha} />
      ))}
    </div>
  );
}

export default TrilhaInfo;
