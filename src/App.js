import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/:qua" component={NotFound} />
        <Route path="/" component={MovieList} />
        {/* render */}
      </Switch>
    </Router>
  );
}

export default App;
