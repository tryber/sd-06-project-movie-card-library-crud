import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
      <Route exact path="/:notfound" component={NotFound} />
    </Router>
  );
}

export default App;
