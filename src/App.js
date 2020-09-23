import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/movies/new' render={() => <NewMovie />} />
        <Route path='/movies/:id/edit' render={() => <EditMovie />} />
        <Route path='/movies/:id' render={() => <MovieDetails />} />
        <Route exact path='/' render={() => <MovieList />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
