import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header.jsx';
import MovieList from './pages/MovieList.js';

import EditMovie from './pages/EditMovie.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import NotFound from './pages/NotFound.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="minhaAplicacao">
          <Header />
          <nav className="meuPrincipal">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/movies/new">Novo</Link></li>
              <li><Link to="/moveis/:id/edit">Editar</Link></li>
            </ul>
          </nav>

          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </div>
      </Router>
    );
  }
}

export default App;
