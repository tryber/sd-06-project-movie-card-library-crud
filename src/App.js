import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';
import movieData from './services/movieData'

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" render={props => <MovieList {...props} avaiableMovies={movieData} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
