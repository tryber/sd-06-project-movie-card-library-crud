import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const fetchData = await movieAPI.getMovies();
    this.setState({ movies: fetchData });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
