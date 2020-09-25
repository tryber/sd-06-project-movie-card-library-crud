import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
