import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';



function App() {
  return (
    <BrowserRouter>
      <h1>MCL CRUD</h1>
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' component={MovieDetails} />
        <Route path='/movies/new' component={NewMovie} />
        <Route path='/movie/:id/edit' component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
