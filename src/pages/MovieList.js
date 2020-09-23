import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMoviesList = this.fetchMoviesList.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  async fetchMoviesList() {
    const moviesList = await movieAPI.getMovies();

    this.setState({
      movies: moviesList,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.fetchMoviesList();
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div data-testid="movie-list">
        {(isLoading === true) ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
