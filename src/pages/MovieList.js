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
    this.getMovieRequest();
  }
  async getMovieRequest() {
    const request = await movieAPI.getMovies();
    this.setState({ movies: request, loading: false });
  }
  render() {
    const { movies } = this.state;
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> :
        (movies.map((movie) => <MovieCard key={movie.title} movie={movie} />))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
