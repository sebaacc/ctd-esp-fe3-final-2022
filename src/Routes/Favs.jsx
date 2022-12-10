import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

const Favs = () => {

  const { state } = useGlobalStates()

  let favoritos = localStorage.getItem("favoritos") || "[]";
  favoritos = JSON.parse(favoritos);

  return (
    <div className={state.theme} >
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favoritos.map((dentist) =>
          (<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />))}
      </div>
    </div>
  );
};

export default Favs;
