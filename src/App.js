import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
