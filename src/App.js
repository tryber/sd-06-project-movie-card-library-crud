import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/movies/:id/edit" component={EditMovie} />
              <Route path="/movies/new" component={NewMovie} />
              <Route path="/movies/:id" component={MovieDetails} />
              <Route exact path="/" component={MovieList} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </BrowserRouter>
    );
  }
}

export default App;
