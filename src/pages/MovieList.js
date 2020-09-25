import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from './Loading'

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const resultAPI = await movieAPI.getMovies();
    this.setState({ movies: resultAPI });
  }

  render() {
    const { movies } = this.state;

    if(movies === []) return <Loading />;

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
