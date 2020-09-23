import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovies().then((fetchOfMovies) =>
    this.setState({
      movies: fetchOfMovies,
      isLoading: false,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    if (isLoading) return <Loading />

    return movies === '' ? (<Loading />) : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
