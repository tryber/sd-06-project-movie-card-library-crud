import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import './MovieList.css';
import './MovieForm.css';

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
    .then((response) => this.setState({
      movies: response,
      loading: false,
    }))
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />

    return (
      <div>
        <div>
          <Link className="default-link" to="movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list" class="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
