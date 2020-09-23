import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    const movieList = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );

    return ((!movies) ? <Loading /> : movieList);
  }
}

export default MovieList;
