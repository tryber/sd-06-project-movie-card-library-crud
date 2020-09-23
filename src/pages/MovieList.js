import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    const movies = async () => {
      const list = await movieAPI.getMovies();
      this.setState(({ movies: list, loading: false }))
    }
    movies()
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        <div className="add-movie">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
