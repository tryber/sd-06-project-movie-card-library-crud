import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true
    }

  }

  componentDidMount() {
    this.fetchMovies()
  }

  async fetchMovies() {
    const result = await movieAPI.getMovies()
    this.setState({ movies: result, loading: false })
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    console.log(this.state.loading)
    if (this.state.loading === true) { return <Loading /> }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
