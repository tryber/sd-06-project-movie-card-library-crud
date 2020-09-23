import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router";
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/new" component={NewMovie}></Route>
        <Route exact path="/movies/:id" component={MovieDetails}></Route>
        <Route path="/movies/:id/edit" component={EditMovie}></Route>
        <Route exact path="/" component={MovieList}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
