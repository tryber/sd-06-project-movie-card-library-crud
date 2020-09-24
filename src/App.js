import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/new"><NewMovie /></Route>
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/movies/:id/edit"><EditMovie /></Route>
        <Route exact path="/"><MovieList /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
