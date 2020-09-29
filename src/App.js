import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
