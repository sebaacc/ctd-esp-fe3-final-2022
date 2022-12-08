import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {Favs.map((dentist) => 
          ( <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>))}
      </div>
    </>
  );
};

export default Favs;
