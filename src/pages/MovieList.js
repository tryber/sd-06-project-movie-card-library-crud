import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await getMovies();
    this.setState({ movies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        { loading ? <Loading /> : '' }
      </div>
    );
  }
}

export default MovieList;
