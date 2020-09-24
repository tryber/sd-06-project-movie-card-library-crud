import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MoviesDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" component={MoviesDetails} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
