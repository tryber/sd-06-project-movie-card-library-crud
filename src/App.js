import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/edit" render={() => <EditMovie />} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" render={() => <MovieDetails />} />
        <Route path="/" render={() => <MovieList />} />
				<Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
