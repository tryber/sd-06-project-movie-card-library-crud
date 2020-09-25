import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
      <Route path="/movies/new" component={NewMovie} />
      {/* <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} /> */}
      <Route exact path="/" component={MovieList} />
      <Route path="/" component={NotFound} />
    </Router>
  );
}

export default App;
