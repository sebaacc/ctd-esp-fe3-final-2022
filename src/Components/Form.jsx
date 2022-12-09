import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [inputFields, setInputFields] = useState({
    nombre: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const espacio = e.target.name;
    const valor = e.target.value;
    setInputFields({ ...inputFields, [espacio]: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    const validateName = /^.{5,}$/.test;
    const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test;

    if (!validateName(inputFields.nombre)) {
      errors.nombre = "nombre incorrecto";
    }
    if (!validateEmail(inputFields.email)) {
      errors.email = "email incorrecto";
    }
    setErrors(errors);

    if (!Object.keys(errors).length) {
      alert(JSON.stringify(inputFields, null, 2));
    }
  };

  return (
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={handleChange}/>
        <br></br>
        <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
        <br></br>
    <button type="submit" onChange={handleChange}>Submit</button>
    <br />
      {Object.entries(errors).map(([key, error]) => (
        <span
          key={`${key}: ${error}`}
          style={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          {key}: {error}
        </span>
      ))}
    </form>
    </div>
  );
};

export default Form;
