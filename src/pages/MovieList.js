import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return loading ? <Loading /> : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
