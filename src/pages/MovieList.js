import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      requisition: false,
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const movie = await getMovies();
    this.setNewState(movie);
  }

  setNewState(newState) {
    this.setState({
      movies: newState,
      requisition: true,
    });
  }

  render() {
    const { movies, requisition } = this.state;

    // Render Loading here if the request is still happening
    if (requisition === false) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
