import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  async componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const filmes = await movieAPI.getMovies();
    this.setState({
      movies: filmes,
    })
  }

  render() {
    const { movies } = this.state;
    const loadingElement = <span>Carregando...</span>
    return (
      <div data-testid="movie-list">
        {movies.length === 0 ? loadingElement : movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />,
        )}
      </div>

    );
  }
}

export default MovieList;
