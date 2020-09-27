import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.showMovies = this.showMovies.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ isLoading: true }, async () => {
      const requestReturn = await movieAPI.getMovies();
      console.log(requestReturn);
      this.setState({
        movies: requestReturn,
        isLoading: false,
      });
    });
  }

  showMovies() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        {isLoading ? <Loading /> : this.showMovies()}
      </div>
    );
  }
}

export default MovieList;
