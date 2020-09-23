import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList, NewMovie } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
