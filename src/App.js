import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MovieList, EditMovie, MovieDetails, NewMovie, NotFound } from './pages';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path component={NotFound} />
      </Router>
    );
  }
}

export default App;
