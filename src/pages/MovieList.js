import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      loading: true,
      movies: [],
    }
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const allMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: allMovies,
        })
      }
    )
  }

  renderMovieElement() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderMovieElement()}
      </div>
    );
  }
}

export default MovieList;
