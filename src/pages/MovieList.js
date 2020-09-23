import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieList extends Component {
  constructor() {
    super();

    this.changeSetState = this.changeSetState.bind(this);

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.changeSetState(response);
  }

  changeSetState(componentResponse) {
    this.setState({ movies: componentResponse });
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
