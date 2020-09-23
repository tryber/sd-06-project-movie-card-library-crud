import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages'

import './App.css';



function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route path='/404' component={NotFound} />
        <Route exact path="/" component={MovieList} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
