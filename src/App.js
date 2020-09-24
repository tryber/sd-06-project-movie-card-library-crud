import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
