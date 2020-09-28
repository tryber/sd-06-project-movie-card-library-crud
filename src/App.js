import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
/* import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie'; */

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      {/* <MovieDetails path="/movies/:id" /> */}
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="movies/new" component={NewMovie} />
      <Route path="movies/:id/edit" component={EditMovie} />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
