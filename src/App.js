import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/"><MovieList /></Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
