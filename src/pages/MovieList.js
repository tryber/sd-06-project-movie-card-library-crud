import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMoviesArray = this.fetchMoviesArray.bind(this);

    this.state = {
      movies: [],
    }
  }

  async fetchMoviesArray() {
    this.setState({
      movies: await movieAPI.getMovies(),
    });
  }

  componentDidMount() {
    this.fetchMoviesArray();
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
