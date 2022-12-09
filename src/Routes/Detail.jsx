import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import {useParams} from "react-router-dom"
import {ContextGlobal} from "../Components/utils/global.context"



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();

  const [dent, setDent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      axios(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
        (res) => setDent(res.data)
      );
    };
    fetchData();
  });

  const { Theme } = useContext(ContextGlobal);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <table>
      <tr> <td>Name</td> <td>Email</td> <td>Phone</td> <td>Website</td> </tr>
      <tr> <td>{dent.name}</td> <td>{dent.email}</td> <td>{dent.phone}</td> <td>{dent.website}</td> </tr>
      </table>
      
    </>
  )
}

export default Detail