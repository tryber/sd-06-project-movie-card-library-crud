import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.disableLoadingMessage = this.disableLoadingMessage.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.disableLoadingMessage();
    this.fetchMovie(movies);
  }

  disableLoadingMessage() {
    this.setState({ isLoading: false });
  }

  fetchMovie(movies) {
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {
          this.state.isLoading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieList;
