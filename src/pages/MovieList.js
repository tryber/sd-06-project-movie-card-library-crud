import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.setMoviesState = this.setMoviesState.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.state = {
      movies: [],
    }
  }
  componentDidMount() {
    this.setMoviesState();
  }

  async setMoviesState() {
    const getMovies = await movieAPI.getMovies();
    console.log(getMovies);
    this.setState({
      movies: getMovies,
    });
  }
  setLoading() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div>
          <p />
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }

  render() {
    const loading = this.setLoading();
    return (
      <div data-testid="movie-list">
        {loading}
      </div>
    );
  }
}

export default MovieList;
