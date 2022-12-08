import React from "react";
import { useContext } from "react";
import {ContextGlobal} from "../Components/utils/global.context"


const Card = ({ name, username, id }) => {

  const[Theme, favs, setFavs] = useContext(ContextGlobal);

  const addFavoritos = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.preventDefault();
  
    setFavs([...favs, {name, username, id} ])
    localStorage.setItem('favs', JSON.stringify(favs))
    alert("se agredo a favoritos");
  
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt="imagen-doctor"/>
        <h3>{username}{id}</h3>
        <link to={id}/>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFavoritos} className="favButton">⭐Add fav</button>
    </div>
  );
};

export default Card;
