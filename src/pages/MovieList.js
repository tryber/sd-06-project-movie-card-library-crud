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
    }
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({
        loading: false,
        movies,
      }));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return (<Loading />);

    return (
      <div data-testid="movie-list">
        <div>
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
          <button>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </button>
      </div>
    );
  }
}

export default MovieList;
