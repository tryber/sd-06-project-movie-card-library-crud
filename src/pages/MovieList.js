import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const moviesList = await movieAPI.getMovies();

    this.setState({
      movies: moviesList,
      loading: false,
    })
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        <button><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
        {loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
