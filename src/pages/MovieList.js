import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { getMovies } = movieAPI;

    const data = await getMovies();

    this.setState((prevState) => (
      {
        movies: [...prevState.movies, ...data],
        isLoading: false,
      }
    ));
  }

  render() {
    const { movies, isLoading } = this.state;

    return (isLoading)
    ? <Loading />
    : (
      <div>
        <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
        <div className="movie-list" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
