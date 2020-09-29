import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.renderMovies = this.renderMovies.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.renderNewMovieLink = this.renderNewMovieLink.bind(this);

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
      this.setState({
        movies: requestReturn,
        isLoading: false,
      });
    });
  }

  renderMovies  () {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  renderNewMovieLink () {
    return (<Link to="/movies/new">ADICIONAR CARTÃO</Link>);
  }


  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (<Loading />);
    }

    // Render Loading here if the request is still happening

    return (
      <div>
        {this.renderMovies()}
        {this.renderNewMovieLink()}
      </div>
    );
  }
}

export default MovieList;
