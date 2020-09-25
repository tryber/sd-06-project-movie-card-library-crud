import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import './movieList.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await getMovies();
    this.setState({
      movies,
      isLoading: false,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {this.state.isLoading ? <Loading /> :
        <div className="movie-list">{movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}</div>}
        <Link to="/movies/new" className="linkDown">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
