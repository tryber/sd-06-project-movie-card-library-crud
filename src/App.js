import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList } from './pages';



function App() {
  return (
    <BrowserRouter>
      <h1>MCL CRUD</h1>
      <Switch>
        <Route exact path='/' component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
