import React from 'react'
import "../../styles/components/layout/Header.css"

const Header = (props) => {
  return (
    <header>
      <div className='holder'>
        <img src="./images/logo.png" alt="" className='img-header'/>
        <h1>Restaurante X</h1>
      </div>
    </header>
  );
}

export default Header;