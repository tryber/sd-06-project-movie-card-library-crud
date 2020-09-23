import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import React, { Component } from 'react';
// import index from './components/index';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';


function App() {
  return (
    <main>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/" component={MovieList} />
          <Route exact path="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
