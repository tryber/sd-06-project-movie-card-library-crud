import React, { Component } from 'react';
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
    const movie = async () => {
      const list = await movieAPI.getMovies()
      console.log(list)
      this.setState(({ movies: list, loading: false }))
    }
    movie()
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (
        <h1 className="loading">Carregando...</h1>
      );
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
