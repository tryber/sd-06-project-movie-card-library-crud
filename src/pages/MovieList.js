import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Loading, MovieCard } from '../components';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies()
    .then((result) => {
      this.setState({
        movies: result,
      });
    });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <nav className="nav-class">
          <span><Link to={'/movies/new'}>ADICIONAR CARTÃO</Link></span>
        </nav>
      </div>
    );
  }
}

export default MovieList;
