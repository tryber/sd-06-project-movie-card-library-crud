import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  // para fazer uma requisição à API
  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movieData = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: movieData,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    const loadingElement = <span>Carregando...</span>;

    const allMovies = movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : allMovies}
      </div>
    );
  }
}

export default MovieList;
