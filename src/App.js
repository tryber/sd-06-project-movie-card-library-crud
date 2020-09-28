import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import movies from './services/movieData';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/movie/:id" component={ MovieDetails } />
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
