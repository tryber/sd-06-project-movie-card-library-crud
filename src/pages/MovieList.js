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

  componentDidMount() {
    this.fetchMovies()
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

  render() {
    const { movies, loading } = this.state;

    return loading ? <Loading /> : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
