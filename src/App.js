import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import index from './components/index';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';


function App() {
  return (
    <main>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
      <Route path="/" component={MovieList} /> 
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path='*' component={NotFound} />
      </BrowserRouter>
    </main>
  );
}

export default App;
