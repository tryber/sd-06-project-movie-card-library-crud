import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NotFound, NewMovie } from './pages';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/movies/new" component={NewMovie} />
            <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
            <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
            <Route exact path="/" component={MovieList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
