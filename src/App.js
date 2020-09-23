import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
