import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index.js';

function App() {
  return (
    <main className="main">
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="movies/new" component={NewMovie} />
          <Route path="movies/:id/edit" component={EditMovie} />
          <Route exact path="movies/:id" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
