import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Loading, MovieCard, MovieForm } from './components';
import { MovieDetails, NewMovie, EditMovie, MovieList, NotFound } from './pages'

function App() {
  return (
    <switch>
      <Router>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/" component={MovieList} />
        <Route path="*" component={NotFound} />
      </Router>
    </switch>
  );
}

export default App;
