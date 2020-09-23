import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD!</div>
      <Switch>
        <Route exact path='/movies/:id/edit' component={EditMovie} />
        <Route exact path='/movies/:id' component={MovieDetails} />
        <Route exact path='/movies/new' component={NewMovie} />
        <Route path='/' component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
