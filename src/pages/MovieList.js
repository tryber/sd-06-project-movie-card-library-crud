import React, { Component } from 'react';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState({
      loading: true,
    }, async () => {
      this.setState({
        movies: await movieAPI.getMovies(),
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : movies.map((movie) => <MovieCard movie={movie} />) }
      </div>
    );
  }
}

export default MovieList;
