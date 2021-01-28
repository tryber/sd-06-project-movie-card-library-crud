import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await movieAPI.getMovies();
    this.setState({ movies: data });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    while (movies.length === 0) {
      return <Loading />
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
