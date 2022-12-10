import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom"
import { ContextGlobal, useGlobalStates } from "../Components/utils/global.context"

const Detail = () => {

  const { state } = useGlobalStates()

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

  return (
    <div className={state.theme} >
      <h1>Detail Dentist id </h1>
      <table>
        <tr> <td>Name</td> <td>Email</td> <td>Phone</td> <td>Website</td> </tr>
        <tr> <td>{dent.name}</td> <td>{dent.email}</td> <td>{dent.phone}</td> <td>{dent.website}</td> </tr>
      </table>
    </div>
  )
}

export default Detail