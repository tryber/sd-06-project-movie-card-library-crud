import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <header className="header">
      <Link to={'/'}>PROJECT MOVIE CARD LIBRARY CRUD</Link>
      </header>
        <Switch>
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <div className="link">
          <Link to={'/movies/new'} >ADICIONAR CARTÃO</Link>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
