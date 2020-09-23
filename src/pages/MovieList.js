import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchGetMovies = this.fetchGetMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchGetMovies();
  }

  async fetchGetMovies() {
    const promiseMovies = await movieAPI.getMovies();
    await this.setState({
      movies: promiseMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading === true ?
          <Loading /> :
          movies
            .map((movie) => <MovieCard key={movie.title} movie={movie} />)
            };
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
