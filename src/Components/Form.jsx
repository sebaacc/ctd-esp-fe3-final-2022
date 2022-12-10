import React from "react";
import { useState } from "react";


const Form = () => {
  const [inputFields, setInputFields] = useState({
    nombre: "",
    email: "",
  });

  const handleChange = (e) => {
    const espacio = e.target.name;
    const valor = e.target.value;
    setInputFields({ ...inputFields, [espacio]: valor });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validateName = /^.{5,}$/.test(inputFields.nombre);
    const validateEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(inputFields.email);

    let formulario = document.querySelector("form");
    let mensajes = document.querySelectorAll("p");

    mensajes.forEach((e) => {
      e.remove();
    });

    if (validateName === false || validateEmail === false) {
      let error = document.createElement("p");
      error.innerHTML = "Información incorrecta, vuelva a intentarlo por favor.";
      formulario.after(error);
    } else {
      let message = document.createElement("p");
      message.innerHTML = `Te contactaremos cuanto antes vía mail ${inputFields.nombre}, muchas gracias.`;
      formulario.after(message);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={handleChange} />
        <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input type="submit" value="Enviar" className="inputForm" />
        </div>
      </form>
    </div>
  );
};

export default Form;
