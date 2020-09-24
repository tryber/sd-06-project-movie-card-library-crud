import React, { Component } from 'react';

import { Loading, MovieCard } from '../components';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  // async componentDidMount() {
  //   const movies = await getMovies();
  //   this.setState({
  //     movies,
  //   });
  // }

  componentDidMount() {
    getMovies()
    .then((result) => {
      this.setState({
        movies: result,
      });
    });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
