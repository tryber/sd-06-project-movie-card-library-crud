import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>Movie Card Library CRUD
      <Router>
        <switch>
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/" component={MovieList} />
          <Route exact path="" component={NotFound} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
