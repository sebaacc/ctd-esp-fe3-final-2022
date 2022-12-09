import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [inputFields, setInputFields] = useState({
    nombre: "",
    email: "",
    errorMessages: {}
  });

  const handleChange = (e) => {
    const espacio = e.target.name;
    const valor = e.target.value;
    setInputFields({ ...inputFields, [espacio]: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateName = /^. {5,}$/.test(inputFields.nombre);
    const validateEmail = /^\w+([.-]? \w+)*@\w+([.-]? \w+)*(\. \w{2,3})+$/.test(inputFields.email);

    if(validateName === false  ||  validateEmail === false ){
      throw Error ("La información proporcionada es incorrecta, verifiquela nuevamente")
    }else{
      alert("Gracias, pronto te contactaremos")
    }
  }

  return (
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={handleChange}/>
        <br></br>
        <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
        <br></br>
    <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;
