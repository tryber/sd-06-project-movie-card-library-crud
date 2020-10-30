import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMoviesList = this.fetchMoviesList.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMoviesList();
  }

  async fetchMoviesList() {
    const moviesList = await movieAPI.getMovies();

    this.setState({
      movies: moviesList,
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
        {
          (isLoading === true) ? <Loading /> : movies
            .map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieList;
