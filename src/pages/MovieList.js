import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const allMovies = await getMovies();
    this.setState({
      loading: false,
      movies: allMovies,
    });
  }

  addMovie() {
    return <Link to="/movies/new">ADICIONAR CARTÃO</Link>
  }

  renderMovieElement() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderMovieElement()}
        {loading ? '' : this.addMovie()}
      </div>
    );
  }
}

export default MovieList;
