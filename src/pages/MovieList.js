import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  async updateState() {
    const apiResult = await movieAPI.getMovies();
    this.setState({
      movies: apiResult,
      loading: true,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === false) {
      return <Loading />
    }
    return (
      <div data-testid="movie-list">
        <h1>Movie List</h1>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
