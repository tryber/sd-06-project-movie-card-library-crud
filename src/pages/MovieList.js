import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components/index';
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movieRequest = await movieAPI.getMovies();
    this.setState({
      movies: movieRequest,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
