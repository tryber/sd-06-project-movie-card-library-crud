import React from 'react';
import MovieList from './pages/MovieList'
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <BrowserRouter>
      <MovieList />
    </BrowserRouter>;
  }
}

export default App;
