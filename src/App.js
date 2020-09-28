import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <Router>
        {/* <MovieDetails path="/movies/:id" /> */}
        <Switch>
          <Route path="/movies/:id" component={MovieDetails}/* render={(props) => <MovieDetails {...props} />} */ />
          <Route path="movies/:id/edit" component={EditMovie}/* render={(props) => <EditMovie {...props} />} */ />
          <Route path="movies/new" component={NewMovie} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
