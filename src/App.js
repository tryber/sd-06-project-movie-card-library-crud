import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import "./App.css";


function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/" component={MovieList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
