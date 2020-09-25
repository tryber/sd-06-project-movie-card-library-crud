import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  EditMovie, MovieDetails, MovieList, NewMovie, NotFound,
} from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route path="/movies/new" render={(props) => <NewMovie {...props} />} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/" render={(props) => <MovieList {...props} />} />
          <Route component={NotFound} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
