import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import Notfound from './pages/NotFound';
import movies from './services/movieData';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route path="*" component={Notfound} />
        <Link />
        <div className="app">
          <div>Movie Card Library CRUD</div>
          <MovieList movies={movies} />
        </div>
      </Router>
    );
  }
}
export default App;
