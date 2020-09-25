import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true
    }
  }
  componentDidMount() {
    this.newState();
  }

  async newState() {
    const newState = await movieAPI.getMovies();
    this.setState({ 
      movies: newState, 
      loading: false
    });
  }

  render() {
    const { loading } = this.state;
    const load = <h1>Loading...</h1>
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading ? load : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
