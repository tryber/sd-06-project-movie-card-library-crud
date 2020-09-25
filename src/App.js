import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieDetails, MovieList } from './pages';



function App() {
  return (
    <BrowserRouter>
      <h1>MCL CRUD</h1>
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
