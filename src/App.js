import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    );
  }
}

export default App;
