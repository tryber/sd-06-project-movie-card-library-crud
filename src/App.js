import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Loading, MovieCard, MovieForm } from './components';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';


function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        {/* <Link to="/" > Home </Link> */}
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
