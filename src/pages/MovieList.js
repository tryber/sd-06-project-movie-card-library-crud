import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.updateMovies();
  }

  async updateMovies() {
    this.setState(async () => {
      const movies = await movieAPI.getMovies();
      this.setState({ loading: false, movies });
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />

    return (
      <div>
        <div className="movie-list" data-testid="movie-list">
          { movies.map((movie) => <MovieCard key={movie.title} movie={movie} />) }
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>

    );
  }
}

export default MovieList;
