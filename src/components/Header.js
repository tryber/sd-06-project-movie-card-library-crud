import React from 'react';
import theCoyote from '../img/1.png';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library - </h1><h1>CRUD</h1>
        <div className="cubo">
          <img src={theCoyote} alt="imagem" width="40" />
          <img src={theCoyote} alt="girando" width="40" />
          <img src={theCoyote} alt="com o logo" width="40" />
          <img src={theCoyote} alt="do coyote" width="40" />
        </div>
      </header>
    );
  }
}

export default Header;
