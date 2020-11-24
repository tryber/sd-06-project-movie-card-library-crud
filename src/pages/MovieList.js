import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import { getMovies } from '../services/movieAPI';


class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.handleState();
  }

  async handleState() {
    const moviesFromApi = await getMovies();
    this.setState({ movies: moviesFromApi });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
