import React from "react";
import { useState } from "react";


const Card = ({ name, username, id }) => {

  //const[Theme, favs, setFavs] = useContext(ContextGlobal);

  const[favs, setFavs] = useState([]);

  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.preventDefault();

    setFavs([...favs, {name, username, id} ])
    localStorage.setItem('favs', JSON.stringify(favs))
    alert("se agregó a favoritos");
    console.log("se agregó a favoritos");
  
  }

  //onClick={addFav} esto va en el boton "favButton"
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt="imagen-doctor" width={200}/>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>id: {id}</p>
        <link to={id}/>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐Add fav</button>
    </div>
  );
};

export default Card;
