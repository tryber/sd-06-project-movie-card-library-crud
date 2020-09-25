import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const moviesObject = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesObject,
        });
      },
    );
  }

  render() {
    const { loading, movies } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
