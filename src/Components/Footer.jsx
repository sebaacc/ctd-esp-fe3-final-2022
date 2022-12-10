import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Footer = () => {

  const { state } = useGlobalStates()

  return (
    <footer className={state.theme} >
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
      <div className='iconsBox'>
        <a href="https://es-la.facebook.com/digitalhouseschool/" target="_blank"><i className="fa-brands fa-facebook face"></i></a>
        <a href="https://www.instagram.com/_digitalhouse/?hl=es" target="_blank"><i className="fa-brands fa-instagram insta"></i></a>
        <a href="https://www.tiktok.com/@_digitalhouse" target="_blank"><i className="fa-brands fa-tiktok tiktok"></i></a>
        <a href="" target="_blank"><i className="fa-brands fa-whatsapp wha"></i></a>
      </div>
    </footer>
  )
}

export default Footer
