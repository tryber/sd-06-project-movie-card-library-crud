import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter>
        <Route path="/movies" component={MovieList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
