import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Movie card Library CRUD</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/movies/:id/edit" component={EditMovie} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
