import React, { Component } from 'react';
import MovieList from './pages/MovieList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <div>Movie Card Library CRUD</div>
          <Switch>
            <Route path="/movies/:id/edit" component={EditMovie} />
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/" component={MovieList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
