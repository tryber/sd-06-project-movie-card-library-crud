import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  async fetchAPI() {
    const { getMovies } = movieAPI;

    const data = await getMovies();

    this.setState((prevState) => (
      {
        movies: [...prevState.movies, ...data],
        isLoading: false,
      }
    ));
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    const { movies, isLoading } = this.state;

    return (isLoading)
    ? <Loading />
    : (
    <div data-testid="movie-list">
      {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
    </div>
    );
  }
}

export default MovieList;
