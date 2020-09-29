import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchMovies();
  }
  async fetchMovies() {
    const getApi = await movieAPI.getMovies();
    this.setState({
      movies: getApi,
      isLoading: false,
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Loading />
      </div>
    );
  }
}

export default MovieList;
