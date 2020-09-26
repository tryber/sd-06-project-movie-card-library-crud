import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="movie-card-header">
        <h1>
          <Link className="page-title" to="/">Movie Card Library</Link>
        </h1>
        <Link className="page-title-add-card" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default Header;
