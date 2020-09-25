import React from 'react';
// identation learned here: https://reactrouter.com/web/example/no-match;
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  MovieList,
  NewMovie,
  MovieDetails,
  EditMovie,
  NotFound,
} from './pages';


function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/" component={MovieList} exact />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
