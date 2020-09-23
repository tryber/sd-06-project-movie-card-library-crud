import React, { Component } from 'react';

import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }

    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
  }

  fetchMovie() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies()
        .then(response => this.setState({ movies: response, loading: false }));
    })
  }

  componentDidMount() {
    this.fetchMovie();
  }

  renderMovies() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
  }

  render() {

    return (
      <div data-testid="movie-list">
        {this.renderMovies()}
      </div>
    );
  }
}

export default MovieList;
