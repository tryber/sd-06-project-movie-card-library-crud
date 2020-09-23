import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
