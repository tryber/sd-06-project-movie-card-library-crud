import React from 'react';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route path="/" component={MovieList} />  
      </Switch>
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
