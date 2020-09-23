import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await getMovies();
    this.setState({
      movies,
      isLoading: false,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {this.state.isLoading ? <Loading /> :
        <div>{movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}</div>}
      </div>
    );
  }
}

export default MovieList;
