import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/*estoy agregando links para las rutas*/}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/Contact'><h3>Contact</h3></Link>
      <Link to='/Favs'><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar