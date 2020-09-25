import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';
import Header from './components/Header'

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
