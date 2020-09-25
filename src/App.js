import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import EditMovie from './pages/EditMovie.js';
import NotFound from './pages/NotFound.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/page-not-found" component={NotFound} />
        <Route exact path="/" component={MovieList} />
        <Redirect to="/page-not-found" />
      </Switch>
    </Router>
  );
}

export default App;
