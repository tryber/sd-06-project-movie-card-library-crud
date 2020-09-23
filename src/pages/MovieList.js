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
      cardMovies: [],
    }
  }

  async fetchMovies() {
    const list = await movieAPI.getMovies();
    this.setState({
      cardMovies: list,
    })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { cardMovies } = this.state;
    if(cardMovies.length === 0) return <Loading />
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
