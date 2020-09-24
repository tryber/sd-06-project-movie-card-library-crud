import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) return <Loading />;

    const movieList = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        {<Link to='/movies/new'>ADICIONAR CARTÃO</Link>}
       
      </div>
    );

    if (movies.length === 0) {
      return <Loading />;
    } return movieList;
  }
}

export default MovieList;
