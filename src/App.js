import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  MovieList, EditMovie, MovieDetails, NewMovie, NotFound,
} from './pages';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/movies/:id/edit" component={EditMovie} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
