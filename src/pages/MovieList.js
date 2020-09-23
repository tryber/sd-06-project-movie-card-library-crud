import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    }
  }

  async fetchMovies() {
    this.setState({
      loading: true,
    });

    const movies = await movieAPI.getMovies();

    this.setState({
      movies,
      loading: false,
    });
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return loading ? <Loading /> : (
      <div data-testid="movie-list">MovieList
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
