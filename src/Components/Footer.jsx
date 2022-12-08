import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  //const [Theme] = useContext(ContextGlobal)
  
  return (
    <footer>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
          <div>
              <i className="fa-brands fa-facebook face"></i>
              <i className="fa-brands fa-instagram insta"></i>
              <i className="fa-brands fa-tiktok tiktok"></i>
              <i className="fa-brands fa-whatsapp wha"></i>
          </div>
    </footer>
  )
}

export default Footer
