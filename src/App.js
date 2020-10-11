import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      </main>
    );
  }
}
export default App;
