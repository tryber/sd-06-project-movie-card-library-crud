import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) return <Loading />;

    const movieList = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );

    if (movies.length === 0) {
      return <Loading />;
    } return movieList;
  }
}

export default MovieList;
