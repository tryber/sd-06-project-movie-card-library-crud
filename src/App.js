import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.js'
import MovieList from './pages/MovieList.js';
import EditMovie from './pages/EditMovie.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import NotFound from './pages/NotFound.js'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="minhaAplicacao">
          <Header />
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </div>  
      </Router>
    );
  }  
}

export default App;
