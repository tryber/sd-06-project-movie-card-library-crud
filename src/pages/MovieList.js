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
   
  async fetchMovies() {
    this.setState(
      {loading: true},
      async () => {
        const movieData = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: movieData
        })
      },
    )
  }

  // para fazer uma requisição à API
  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;

    const loadingElement = <span>Carregando...</span>

    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
