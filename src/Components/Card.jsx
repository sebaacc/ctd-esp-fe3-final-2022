import React from "react";

import { useGlobalStates } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const addFav = (e) => {
    e.preventDefault();

    let datos = { name, username, id };

    let favoritos = localStorage.getItem("favoritos") || "[]";
    favoritos = JSON.parse(favoritos);

    let posLista = favoritos.findIndex(function(e) { return e.id == datos.id; });

    if (posLista > -1) {
      favoritos.splice(posLista, 1);
      alert("se eliminó de favoritos");
      console.log("se eliminó " + name + " de favoritos");
    } else {
      favoritos.push(datos);
      alert("se agregó a favoritos");
      console.log("se agregó " + name + " a favoritos");
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="/images/doctor.jpg" alt="imagen-doctor" width={200} />
      <h3>{name}</h3>
      <p>{username}</p>
      <p>id: {id}</p>
      <link to={id} />
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">⭐Add fav</button>
    </div>
  );
};

export default Card;
