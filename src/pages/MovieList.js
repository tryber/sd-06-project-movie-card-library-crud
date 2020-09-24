import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies()
  }

  async fetchMovies() {
    const newMovie = await movieAPI.getMovies();
    await this.setState({
      movies: newMovie,
      loading: false });
  }


  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading === true ? <Loading /> :
        movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)};
      </div>
    );
  }
}

export default MovieList;
