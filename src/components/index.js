import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from '../pages/MovieList';
import MovieDetails from '../pages/MovieDetails';
import NewMovie from '../pages/NewMovie';
import EditMovie from '../pages/EditMovie';
import NotFound from '../pages/NotFound';

class Index extends Component {
  render() {
    return (
      <Switch>
        <Route path='/movies/:id/edit' component={EditMovie} />
        <Route path='/movies/new' component={NewMovie} />
        <Route path='/movies/:id' component={MovieDetails}/>
        <Route exact path='/' component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Index;

export { default as Loading } from './Loading';
export { default as MovieForm } from './MovieForm';
export { default as MovieCard } from './MovieCard';
