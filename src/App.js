import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import Notfound from './pages/NotFound';
// import movies from './services/movieData';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
