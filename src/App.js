import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/new" render={(props) => <NewMovie {...props} />} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
