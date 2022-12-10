import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useGlobalStates()

  let favoritos = localStorage.getItem("favoritos") || "[]";
  favoritos = JSON.parse(favoritos);
  /*
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])
  */
  return (
    <div className={state.theme} >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoritos.map((dentist) =>
          (<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />))}
      </div>
    </div>
  );
};

export default Favs;
