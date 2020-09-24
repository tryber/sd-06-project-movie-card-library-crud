import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
      <Route exact path="*" component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
