import React from 'react';
import imagemLogo from '../img/1.png';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library - CRUD</h1>
        <Logo imagem={imagemLogo} />
      </header>
    );
  }
}

export default Header;
