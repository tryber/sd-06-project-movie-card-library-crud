import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  async fetchMovies() {
    const listOfMovies = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: listOfMovies,
    });
  }

  componentDidMount() {
    this.fetchMovies();    
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
