import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies()
}

async fetchMovies() {
  const newMovie = await movieAPI.getMovies();
  this.setState({ movies: newMovie });
  }


  render() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return (
        <Loading />
      )
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
