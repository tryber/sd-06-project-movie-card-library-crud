import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter>
        {/* <Link to="/not-found">Não encontrado</Link> */}
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/" component={MovieList} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
