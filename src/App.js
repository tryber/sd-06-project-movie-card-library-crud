import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
