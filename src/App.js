import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/new" render={(props) => <NewMovie {...props} />} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
