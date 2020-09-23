import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/movies/:id/edit" components={EditMovie} />
          <Route path="/movies/new" components={NewMovie} />
          <Route path="/movies/:id" components={MovieDetails} />
          <Route exact path="/" components={MovieList} />
          <Route exact path="" components={NotFound} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;