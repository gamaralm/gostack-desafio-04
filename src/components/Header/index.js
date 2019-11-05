import React from 'react';

import './style.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Facebook" />

        <a href="">Meu Perfil</a>
      </div>
    </header>
  )
}

export default Header;
