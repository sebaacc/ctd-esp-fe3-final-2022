import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'

const Navbar = () => {

  const { state, dispatch } = useGlobalStates()

  return (
    <nav className={state.theme} >
      <div>
        <h2><span>DH</span> Odonto</h2>
      </div>
      <div>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/Contact'><h3>Contact</h3></Link>
        <Link to='/Favs'><h3>Favs</h3></Link>

        {state.theme === 'light' ?
          <button className='switchButton' onClick={() => dispatch({ type: 'SWITCH_DARK', payload: 'dark' })}> 🌛 </button>
          :
          <button className={'switchButton ' + state.theme} onClick={() => dispatch({ type: 'SWITCH_LIGHT', payload: 'light' })}> ☀️ </button>
        }
      </div>
    </nav>
  )
}

export default Navbar