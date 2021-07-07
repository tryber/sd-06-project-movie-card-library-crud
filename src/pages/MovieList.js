import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
    this.functionNeeded = this.functionNeeded.bind(this);
  }

  componentDidMount() {
    this.functionNeeded();
  }

  async functionNeeded() {
    const movieDownLoad = await movieAPI.getMovies()
    this.setState({
      movies: movieDownLoad,
    })
  }

  render() {
    const { movies } = this.state;

    if (this.state.movies.length === 0) {
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
