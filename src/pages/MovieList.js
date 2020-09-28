import React, { Component } from 'react';

import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.renderMovies()
  }

  async renderMovies() {
    this.setState({
      movies: await movieAPI.getMovies(),
      loading: false,
    });
  }

  render() {
    const { movies } = this.state;
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieList;
