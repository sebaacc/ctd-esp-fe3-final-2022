import React, { useContext } from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from "../Components/utils/global.context"

const Contact = () => {

  const { state } = useGlobalStates()

  return (
    <div className={state.theme} >
      <h2>Quieres saber más?</h2>
      <p>Envíanos tus consultas y nos contactaremos pronto contigo.</p>
      <Form />
    </div>
  )
}

export default Contact