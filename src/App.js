import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index.js';

function App() {
  return (
    <main className="main">
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" render={(props) => <NewMovie {...props} /> }/>
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} /> }/>
          <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} /> }/>
          <Route exact path="/" render={(props) => <MovieList {...props} />}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
