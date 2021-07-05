import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/new"><NewMovie /></Route>
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route exact path="/"><MovieList /></Route>
        <Route><NotFound /></Route>
      </Switch>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
