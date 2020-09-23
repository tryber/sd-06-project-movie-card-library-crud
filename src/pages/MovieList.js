import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.renderMovies = this.renderMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.renderMovies();
  }

  async renderMovies() {
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovies();
        this.setState({
          movies: response,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <p>Carregando...</p>;

    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieList;
