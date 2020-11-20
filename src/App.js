import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, NewMovie, NotFound, MovieList } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/404" component={NotFound} />
        <Route exact path="/" component={MovieList} />
        <Redirect exact from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
