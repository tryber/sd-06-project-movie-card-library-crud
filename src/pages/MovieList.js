import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  async fetchMovies() {
    const list = await movieAPI.getMovies();
    this.setState({
      movies: list,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;
    if(loading === true) return <Loading />
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
