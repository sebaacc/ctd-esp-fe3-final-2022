import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal, useGlobalStates } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  //const [Theme] = useContext(ContextGlobal)

  const { state, dispatch } = useGlobalStates()

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/Contact'><h3>Contact</h3></Link>
      <Link to='/Favs'><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {state.theme === 'light' ?
        <button onClick={() => dispatch({ type: 'SWITCH_DARK', payload: 'dark' })}> Change theme dark icono lunita </button>
        :
        <button onClick={() => dispatch({ type: 'SWITCH_LIGHT', payload: 'light' })}> Change theme light icono sol </button>
      }
    </nav>
  )
}

export default Navbar