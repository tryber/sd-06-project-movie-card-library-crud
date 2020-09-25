import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <h1>MCL CRUD</h1>
      <Switch>
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/"component={MovieList} />
        <Route component={NotFound} />
      </Switch>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
