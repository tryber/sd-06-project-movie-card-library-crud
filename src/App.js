import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ MovieList } />
      </Switch>
      <Switch>
        <Route path="/movies/:id" component={ MovieDetails } />
      </Switch>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
      </Switch>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie }/>
      </Switch>
      <Switch>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
