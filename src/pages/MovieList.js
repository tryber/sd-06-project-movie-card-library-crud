import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.loadApi = this.loadApi.bind(this);
  }

  componentDidMount() {
    this.loadApi();
  }

  async loadApi() {
    const returnApi = await movieAPI.getMovies();
    this.setState({
      movies: returnApi,
      loading: false,
    });
  }

  render() {
    const { movies } = this.state;
    if (this.state.loading === true) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
