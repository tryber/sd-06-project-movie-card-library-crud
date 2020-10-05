import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/';

function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <button>Link 1</button>
    </div>
    
  );
}

export default App;
