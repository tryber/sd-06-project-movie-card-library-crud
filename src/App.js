import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/';



function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route path='/movies/:id/edit' component={EditMovie}></Route>
          <Route path='/movies/new' component={NewMovie}></Route>
          <Route path='/movies/:id' component={MovieDetails}></Route>
          <Route exact path='/' component={MovieList}></Route>
          <Route path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
