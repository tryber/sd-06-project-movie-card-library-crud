import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const arrayMovies = await movieAPI.getMovies();
    this.setState({
      movies: arrayMovies,
      loading: false,
    });
  }
  
  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        (loading === true ?) <Loading /> : {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
