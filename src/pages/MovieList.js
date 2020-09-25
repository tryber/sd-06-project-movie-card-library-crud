import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
/* import {
  getMovies, getMovie, readMovie, updateMovie, deleteMovie, createMovie
  } from '../services/movieAPI'; */
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    getMovies()
      .then((movies) => this.setState({ movies, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return (<Loading />);

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        <Link to="/movies/new" className="add-movie">
          ADICIONAR CARTÃO
        </Link>
      </div>
    );
  }
}

export default MovieList;
