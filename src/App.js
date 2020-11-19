import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/new" render={(props) => <NewMovie {...props} />} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/" render={(props) => <MovieList {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
